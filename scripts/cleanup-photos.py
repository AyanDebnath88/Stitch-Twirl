"""One-off cleanup pass for the first product photo batch.

For each source photo: auto-orient (EXIF), mild autocontrast (light levels
fix, no AI generation), crop per the fractional box below (trims stray
background / people / clutter at the edges), resize to a sane web width,
save as JPEG into public/products/<slug>/.

Crop box = (left, top, right, bottom) as fractions of the auto-oriented
image, e.g. (0.05, 0.0, 0.95, 0.85) trims 5% off each side and 15% off
the bottom.
"""

import os
from PIL import Image, ImageOps

SRC_ROOT = r"E:\Claude Projects\Stitch & Twirl\new-products"
DST_ROOT = r"E:\Claude Projects\Stitch & Twirl\public\products"
MAX_WIDTH = 1600

# (source_relpath, dest_slug, dest_name, crop_box)
JOBS = [
    ("floral-granny-scarf/2.jpeg", "floral-granny-scarf", "hero.jpg", (0.03, 0.02, 0.97, 0.98)),
    ("floral-granny-scarf/1.jpeg", "floral-granny-scarf", "2.jpg", (0.03, 0.02, 0.97, 0.98)),

    ("midnight-shawl/2.jpeg", "midnight-shawl", "hero.jpg", (0.05, 0.05, 0.95, 0.92)),

    ("sunflower-star-doily/2.jpeg", "sunflower-star-doily", "hero.jpg", (0.08, 0.15, 0.92, 0.95)),
    ("sunflower-star-doily/1.jpeg", "sunflower-star-doily", "2.jpg", (0.05, 0.05, 0.95, 0.95)),

    ("silver-beaded-potli/2.jpeg", "silver-beaded-potli", "hero.jpg", (0.05, 0.18, 0.95, 0.85)),
    ("silver-beaded-potli/1.jpeg", "silver-beaded-potli", "2.jpg", (0.05, 0.08, 0.95, 0.85)),

    ("ivory-pearl-potli/2.jpeg", "ivory-pearl-potli", "hero.jpg", (0.1, 0.15, 0.9, 0.88)),
    ("ivory-pearl-potli/1.jpeg", "ivory-pearl-potli", "2.jpg", (0.1, 0.08, 0.9, 0.88)),

    ("rainbow-bead-bucket-bag/1.jpeg", "rainbow-bead-bucket-bag", "hero.jpg", (0.05, 0.15, 0.95, 0.85)),
    ("rainbow-bead-bucket-bag/4.jpeg", "rainbow-bead-bucket-bag", "2.jpg", (0.02, 0.02, 0.98, 0.9)),

    ("maroon-tapestry-bucket-bag/2.jpeg", "maroon-tapestry-bucket-bag", "hero.jpg", (0.1, 0.1, 0.9, 0.92)),
    ("maroon-tapestry-bucket-bag/1.jpeg", "maroon-tapestry-bucket-bag", "2.jpg", (0.02, 0.02, 0.98, 0.95)),

    ("gold-pearl-potli/1.jpeg", "gold-pearl-potli", "hero.jpg", (0.1, 0.08, 0.9, 0.88)),
    ("gold-pearl-potli/2.jpeg", "gold-pearl-potli", "2.jpg", (0.1, 0.08, 0.9, 0.88)),

    ("gold-bead-potli/2.jpeg", "gold-bead-potli", "hero.jpg", (0.1, 0.08, 0.9, 0.85)),
    ("gold-bead-potli/1.jpeg", "gold-bead-potli", "2.jpg", (0.1, 0.08, 0.9, 0.85)),

    ("mustard-star-doily/1.jpeg", "mustard-star-doily", "hero.jpg", (0.0, 0.0, 1.0, 1.0)),

    ("flower-appliques/red-cream-pair.jpeg", "flower-appliques", "hero.jpg", (0.05, 0.25, 0.95, 0.8)),
    ("flower-appliques/ivory-rose.jpeg", "flower-appliques", "2.jpg", (0.05, 0.3, 0.95, 0.85)),
]


def process(src_rel, slug, name, box):
    src_path = os.path.join(SRC_ROOT, src_rel)
    img = Image.open(src_path)
    img = ImageOps.exif_transpose(img)  # honor phone's rotation metadata
    w, h = img.size
    l, t, r, b = box
    img = img.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
    img = ImageOps.autocontrast(img, cutoff=1)  # mild levels fix, not AI
    if img.width > MAX_WIDTH:
        new_h = int(img.height * MAX_WIDTH / img.width)
        img = img.resize((MAX_WIDTH, new_h), Image.LANCZOS)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    dst_dir = os.path.join(DST_ROOT, slug)
    os.makedirs(dst_dir, exist_ok=True)
    dst_path = os.path.join(dst_dir, name)
    img.save(dst_path, "JPEG", quality=88)
    print(f"{src_rel} -> products/{slug}/{name}  ({img.width}x{img.height})")


for src_rel, slug, name, box in JOBS:
    process(src_rel, slug, name, box)

print("Done.")
