# Master product-shot prompts (etsy-handmade preset, 4:5)

One reusable set of 4 prompts. For every product: attach that product's
cleaned source photo as the image reference, run all 4 prompts against it.
Do not write a new prompt per product — the reference image supplies the
product's actual shape/colors/materials; the text just sets the shot.

Aspect ratio `4:5`. Every prompt already ends with `resolution: 2k`.

**Contrast rule (applies to every angle):** the backdrop must contrast against
the product's own color, not match it — a cream/ivory/white product needs a
darker surface (charcoal linen, dark walnut wood, slate, espresso-brown), a
black/dark product needs a lighter surface (pale linen, light oak, cream
stone). Never put a light product on a light surface or a dark product on a
dark surface — the product must pop, not blend in.

Shared `[AVOID]` block (already included at the end of each prompt below):
```
no AI artifacts, no warped or smeared text, no fake words baked into the image,
no plastic look, no waxy surface, no cartoonish rendering,
no extra fingers, no extra limbs, no melted geometry, no doubled subjects,
no oversaturated HDR, no HDR halos, no oversharpened look,
no flat fluorescent lighting, no harsh on-camera flash,
no generic stock photography poses, no cliché compositions,
no random unrelated brand logos, no watermarks, no signatures,
no AI sheen on hair or skin, no doll-like rendering, no airbrush look,
no flat solid color bands, no empty rectangular areas, no dull gradient zones
that look out of place from the rest of the scene.
```

---

## Angle 1 — Hero

```
[SUBJECT]
Hero shot of the exact handmade crochet product shown in the attached
reference image. Preserve its true colors, stitch pattern, materials, and
construction exactly as photographed — do not redesign or reinterpret the
product.

[COMPOSITION]
Product arranged naturally (laid flat with a gentle fold, or standing upright
if it's a bag) to show its texture and shape clearly, centred with generous
negative space, slight rule-of-thirds offset.

[LIGHTING]
Soft window-diffused daylight, 45° camera-left, large softbox diffusion
quality, 4000–4500K warm-neutral, gentle wraparound shadow falloff, contact
shadow only at base.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/4 to f/5.6, medium depth of field,
sharp focus on the product's texture.

[MATERIALS & TEXTURE]
Realistic yarn/thread weave, tack-sharp individual stitch and fiber detail, no
flattening of texture, no plastic sheen.

[COLOR PALETTE]
Keep the product's own true colors exactly as in the reference image, set
against a warm neutral surface.

[SURFACE / BACKDROP]
Pick ONE surface that CONTRASTS against the product's own color — if the
product is light/cream/white, use a darker surface (charcoal linen, dark
walnut wood, slate stone, espresso-brown); if the product is dark/black, use
a lighter surface (pale linen, light oak, cream stone, warm sand). Vary the
choice across a set of images; do not default to the same backdrop every time,
and never let the product blend into a same-tone background.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, natural varied surface staging, soft
natural daylight, unforced organic composition, artisan small-batch product
photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, cozy handmade mood, boutique small-batch feel.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
no AI artifacts, no warped or smeared text, no fake words baked into the image,
no plastic look, no waxy surface, no cartoonish rendering,
no extra fingers, no extra limbs, no melted geometry, no doubled subjects,
no oversaturated HDR, no HDR halos, no oversharpened look,
no flat fluorescent lighting, no harsh on-camera flash,
no generic stock photography poses, no cliché compositions,
no random unrelated brand logos, no watermarks, no signatures,
no AI sheen on hair or skin, no doll-like rendering, no airbrush look,
no flat solid color bands, no empty rectangular areas, no dull gradient zones
that look out of place from the rest of the scene.
no redesigning the product, no changing its stitch pattern or color, no
inventing details not present in the reference image.

resolution: 2k
```

---

## Angle 2 — Close to Source (preserve original framing)

```
[SOURCE-FAITHFUL VARIANT]
Use the attached reference photo as the primary source. PRESERVE its exact
camera angle, crop, product position, and natural fold/drape — do not
recompose and do not change the product itself. Only clean up the background
and lighting: replace the original backdrop with a surface that CONTRASTS
against the product's own color (darker surface — charcoal linen, dark
walnut, slate — for a light/cream product; lighter surface — pale linen,
light oak, warm sand — for a dark product), different from the other angles
in this set, and apply soft window-diffused daylight, 4000–4500K warm-neutral.
The result must read as the same photograph, naturally cleaned up — not a new
shot, not a new composition.

[AVOID]
no AI artifacts, no plastic look, no waxy surface, no cartoonish rendering,
no oversaturated HDR, no oversharpened look, no flat fluorescent lighting,
no harsh on-camera flash, no watermarks, no signatures, no AI sheen,
no flat solid color bands, no empty rectangular areas,
no redesigning the product, no changing its stitch pattern or color,
no recomposing, no changing the camera angle or crop from the source.

resolution: 2k
```

---

## Angle 3 — Detail Close-up

```
[DETAIL SHOT]
Tight macro close-up on the single most distinctive texture or construction
detail of the product shown in the reference image (e.g. its central motif,
beadwork, fringe knot, or stitch pattern — pick whichever feature is most
visually distinctive in that image). Fill most of the frame with it. Same
lighting quality and palette as a warm hand-crafted etsy-style product shot:
soft window-diffused daylight, a surface that CONTRASTS against the product's
color (darker for a light product, lighter for a dark product), different
from the other angles in this set. Very shallow depth of field (f/2.8),
background softly out of focus.

[AVOID]
no AI artifacts, no plastic look, no waxy surface, no oversaturated HDR,
no oversharpened look, no flat fluorescent lighting, no watermarks,
no AI sheen, no redesigning the product, no inventing details not present in
the reference image.

resolution: 2k
```

---

## Angle 4 — Alternate Angle

```
[ALT ANGLE]
Same product (from the reference image), same soft window-diffused daylight
and palette as a hero shot, on a surface that CONTRASTS against the product's
color (darker for a light product, lighter for a dark product), different
from the other angles in this set — but from a
different natural angle than a straight three-quarter view: either a
full top-down flat lay showing the entire piece edge to edge, or the product
laid on its side with a natural slouch/drape if it's a bag. Choose whichever
alternate angle best suits this product's shape. Do not change the product
itself.

[AVOID]
no AI artifacts, no plastic look, no waxy surface, no oversaturated HDR,
no oversharpened look, no flat fluorescent lighting, no watermarks,
no AI sheen, no redesigning the product, no inventing details not present in
the reference image.

resolution: 2k
```
