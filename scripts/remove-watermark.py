"""
Remove the fixed-position Flow sparkle watermark (bottom-right corner,
same pixel spot on every 896x1200 export) via local seamless clone —
try a patch from each of 4 directions around the mark, keep whichever
blends best against the real surrounding texture (by border-pixel
difference), and Poisson-blend it over the mark with OpenCV's
seamlessClone. No AI/remote service involved, no network calls.

Seamless clone (vs. a flat feathered paste) matters on busy textures —
fringe, macro stitch detail — where a flat paste leaves a visible soft
patch; Poisson blending matches gradients at the seam instead of just
alpha-fading pixel values, so the patch disappears into stitch/weave
lines instead of sitting on top of them.
"""
import os
import cv2
import numpy as np

SRC_DIR = "new-products"
OUT_DIR = "new-products/_dewatermarked"

# Box around the sparkle mark (896x1200 source images), generous margin.
WM_BOX = (758, 1058, 878, 1178)  # 120x120
SHIFT = 130
CANDIDATES = [(-SHIFT, 0), (SHIFT, 0), (0, -SHIFT), (0, SHIFT)]

def border_pixels(arr, x0, y0, x1, y1):
    top = arr[y0, x0:x1]
    bottom = arr[y1 - 1, x0:x1]
    left = arr[y0:y1, x0]
    right = arr[y0:y1, x1 - 1]
    return np.concatenate([top, bottom, left, right])

def clean(img_bgr: np.ndarray) -> np.ndarray:
    x0, y0, x1, y1 = WM_BOX
    h, w = img_bgr.shape[:2]
    real_border = border_pixels(img_bgr, x0, y0, x1, y1).astype(np.float32)

    best_cost, best_box = None, None
    for dx, dy in CANDIDATES:
        sx0, sy0, sx1, sy1 = x0 + dx, y0 + dy, x1 + dx, y1 + dy
        if sx0 < 0 or sy0 < 0 or sx1 > w or sy1 > h:
            continue
        cand_border = border_pixels(img_bgr, sx0, sy0, sx1, sy1).astype(np.float32)
        cost = np.abs(cand_border - real_border).mean()
        if best_cost is None or cost < best_cost:
            best_cost, best_box = cost, (sx0, sy0, sx1, sy1)

    sx0, sy0, sx1, sy1 = best_box
    patch = img_bgr[sy0:sy1, sx0:sx1]

    mask = np.zeros((y1 - y0, x1 - x0), dtype=np.uint8)
    cv2.ellipse(
        mask,
        ((x1 - x0) // 2, (y1 - y0) // 2),
        ((x1 - x0) // 2 - 3, (y1 - y0) // 2 - 3),
        0, 0, 360, 255, -1,
    )
    center = (x0 + (x1 - x0) // 2, y0 + (y1 - y0) // 2)
    return cv2.seamlessClone(patch, img_bgr, mask, center, cv2.NORMAL_CLONE)

def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    for fname in sorted(os.listdir(SRC_DIR)):
        path = os.path.join(SRC_DIR, fname)
        if not os.path.isfile(path) or not fname.lower().endswith((".jpg", ".jpeg")):
            continue
        img = cv2.imdecode(np.fromfile(path, dtype=np.uint8), cv2.IMREAD_COLOR)
        cleaned = clean(img)
        out_path = os.path.join(OUT_DIR, fname)
        ok, buf = cv2.imencode(".jpg", cleaned, [cv2.IMWRITE_JPEG_QUALITY, 92])
        buf.tofile(out_path)
        print("cleaned:", fname)

if __name__ == "__main__":
    main()
