# Product-shot prompts (etsy-handmade preset, 4:5, nano_banana_pro-style)

Feed each block as one prompt, with the matching source photo attached as an
image reference, into any image-to-image tool ("Flow" or otherwise). Aspect
ratio `4:5`, end every prompt with the literal line `resolution: 2k`.

Each product now has 4 angle variants:
- **Angle 1 (Hero)** — styled three-quarter/flat-lay shot, the main listing photo.
- **Angle 2 (Close to Source)** — deliberately preserves the original phone
  photo's exact framing/crop/pose, only cleaning background+lighting, to keep
  one shot organically tied to the real source image.
- **Angle 3 (Detail)** — macro close-up on a signature texture/detail.
- **Angle 4 (Alt angle)** — a different natural angle (flat lay, side-lay, etc).

Shared `[AVOID]` block (append to every prompt):
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

## 1. Cream Granny-Square Floral Scarf

```
[SUBJECT]
Hero shot of a hand-crocheted cream granny-square scarf, each square centred
with a red crochet flower on green leaves, finished with a long red-green-white
knotted fringe and two matching yarn pom-poms.

[COMPOSITION]
Product laid flat with a gentle natural fold to show texture, centred with
generous negative space, slight rule-of-thirds offset, fringe cascading toward
the lower third.

[LIGHTING]
Soft window-diffused daylight, 45° camera-left, large softbox diffusion
quality, 4000K mixed warm interior, gentle wraparound shadow falloff, contact
shadow only at base.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/4 to f/5.6, medium depth of field, sharp
focus on the central flower motifs.

[MATERIALS & TEXTURE]
Realistic fabric weave, tack-sharp individual yarn fiber detail, soft natural
fringe movement, no flattening of the granny-square texture.

[COLOR PALETTE]
Dominant tones: warm cream, forest green, coral red — true to the product's own
colors, set against a neutral warm linen backdrop.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, natural linen and raw-wood surface
staging, soft natural daylight, unforced organic composition, artisan
small-batch product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, cozy handmade mood, boutique small-batch feel.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, product position, and natural fold/drape — do not
recompose. Only clean up the background and lighting: replace the original
backdrop with the same warm neutral linen surface and soft daylight described
above. The result must read as the same photograph, naturally cleaned up —
not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on one granny-square flower motif and its neighbouring
fringe corner, filling most of the frame. Same lighting quality, palette, and
surface staging as the hero shot above. Very shallow depth of field (f/2.8),
background softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but shot
fully top-down (flat lay), scarf unfolded completely flat to show the whole
square grid pattern edge to edge.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 2. Midnight Triangle Shawl

```
[SUBJECT]
Hero shot of a hand-crocheted black triangular shawl in a simple open stitch,
finished with a long knotted fringe along the base edge.

[COMPOSITION]
Product laid flat, full triangle visible, centred with generous negative
space, fringe fanned naturally along the bottom third.

[LIGHTING]
Soft window-diffused daylight, 45° camera-left, large softbox diffusion,
4000K mixed warm interior, gentle wraparound shadow, deep but not crushed
blacks.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/5.6, medium depth of field, sharp focus
on the stitch texture at centre.

[MATERIALS & TEXTURE]
Realistic fabric weave, visible open-stitch texture, soft natural fringe
detail, no plastic sheen on the black yarn.

[COLOR PALETTE]
Dominant tones: deep black product against a warm neutral cream backdrop, soft
contrast, no crushed shadows.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, natural linen surface staging, soft
natural daylight, understated artisan product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, quiet handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, product position, and natural fold/drape — do not
recompose. Only clean up the background and lighting: replace the original
backdrop with the same warm neutral cream surface and soft daylight described
above. The result must read as the same photograph, naturally cleaned up —
not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on the fringe knot line where the shawl body meets the
fringe, filling most of the frame. Same lighting quality, palette, and surface
staging as the hero shot above. Very shallow depth of field (f/2.8),
background softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but shot
fully top-down (flat lay), shawl opened into its full triangle shape, entire
piece visible edge to edge.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 3. Sunflower Table Doily

```
[SUBJECT]
Hero shot of a hand-crocheted layered sunflower-shaped doily — rust-orange
petals, cream mid-layer, deep maroon centre, forest-green accent dots, scalloped
edge.

[COMPOSITION]
Top-down flat lay, doily centred and filling most of the frame, generous even
negative-space margin on all sides.

[LIGHTING]
Soft top-down daylight, large softbox diffusion, 4500K neutral-warm, even
gentle falloff, minimal shadow under scalloped edge.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/8, deep depth of field, entire doily
sharp edge to edge.

[MATERIALS & TEXTURE]
Realistic cotton-yarn weave, tack-sharp petal and stitch detail.

[COLOR PALETTE]
Dominant tones: rust orange, cream, deep maroon, forest green — true to
product — against a warm neutral wood or linen surface.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, raw-wood or linen surface staging, soft
natural daylight, artisan flat-lay product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, cozy handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, and product position — do not recompose. Only clean up the
background and lighting: replace the original backdrop with the same warm
neutral surface and soft daylight described above. The result must read as
the same photograph, naturally cleaned up — not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on the layered centre rings — maroon, cream, and the
green accent-dot border — filling most of the frame. Same lighting quality,
palette, and surface staging as the hero shot above. Very shallow depth of
field (f/2.8), background softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but
camera lowered to a gentle 30° angle, doily resting beside a small stack of
folded linen napkins for a lived-in tablescape feel rather than pure flat lay.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 4. Mustard Star Table Mat

```
[SUBJECT]
Hero shot of a hand-crocheted six-pointed star table mat, cream body with a
mustard-gold border, dense floral-stitch fill.

[COMPOSITION]
Top-down flat lay, star centred and filling most of the frame, even negative
space at the points.

[LIGHTING]
Soft top-down daylight, large softbox diffusion, 4500K neutral-warm, even
gentle falloff.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/8, deep depth of field, entire mat sharp.

[MATERIALS & TEXTURE]
Realistic cotton-yarn weave, tack-sharp stitch detail across the star points.

[COLOR PALETTE]
Dominant tones: cream and mustard-gold, true to product, against a warm
neutral wood or linen surface.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, raw-wood or linen surface staging, soft
natural daylight, artisan flat-lay product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, cozy handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, and product position — do not recompose. Only clean up the
background and lighting: replace the original backdrop with the same warm
neutral surface and soft daylight described above. The result must read as
the same photograph, naturally cleaned up — not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on one star point showing the mustard-gold border stitch
against the cream body, filling most of the frame. Same lighting quality,
palette, and surface staging as the hero shot above. Very shallow depth of
field (f/2.8), background softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but the
mat draped so one point gently overhangs the edge of the wood surface, a more
natural in-use moment rather than a perfectly flat lay.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 5. Silver Beaded Potli Bag

```
[SUBJECT]
Hero shot of a hand-crocheted silver drawstring potli bag, every stitch
threaded with small metal beads, two beaded drawstring cords with beaded
tassel ends.

[COMPOSITION]
Product standing upright, three-quarter front angle, centred with generous
negative space, drawstrings falling naturally in front.

[LIGHTING]
Soft directional daylight, 45° camera-left, large softbox diffusion, 5000K
daylight-neutral to bring out bead sparkle, gentle contact shadow at base.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/4, shallow-medium depth of field,
sharp focus on the beaded body.

[MATERIALS & TEXTURE]
Realistic metallic bead reflections, tack-sharp crochet mesh detail, natural
specular highlights on each bead — not uniform/artificial.

[COLOR PALETTE]
Dominant tones: silver and soft grey, against a warm neutral cream backdrop for
contrast.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, linen surface staging, soft natural
daylight, artisan small-object product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, festive-but-understated handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, and product position — do not recompose. Only clean up the
background and lighting: replace the original backdrop with the same warm
neutral surface and soft daylight described above. The result must read as
the same photograph, naturally cleaned up — not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on the beaded drawstring tassel end, filling most of the
frame. Same lighting quality, palette, and surface staging as the hero shot
above. Very shallow depth of field (f/2.8), background softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but the
bag laid on its side with the mouth slightly open and a natural slouch, rather
than standing upright.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 6. Ivory Pearl Potli Bag

```
[SUBJECT]
Hero shot of a hand-crocheted ivory drawstring potli bag in a shell-stitch
texture, scattered with small pearl beads, two beaded drawstring cords.

[COMPOSITION]
Product standing upright, three-quarter front angle, centred with generous
negative space, drawstrings falling naturally in front.

[LIGHTING]
Soft directional daylight, 45° camera-left, large softbox diffusion, 4500K
warm-neutral, gentle contact shadow at base.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/4, shallow-medium depth of field, sharp
focus on the shell-stitch texture and pearls.

[MATERIALS & TEXTURE]
Realistic cotton-thread shell-stitch texture, soft pearl sheen, tack-sharp
detail.

[COLOR PALETTE]
Dominant tones: ivory and soft cream, against a warm neutral linen backdrop.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, linen surface staging, soft natural
daylight, bridal-adjacent artisan product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, soft romantic handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, and product position — do not recompose. Only clean up the
background and lighting: replace the original backdrop with the same warm
neutral surface and soft daylight described above. The result must read as
the same photograph, naturally cleaned up — not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on the shell-stitch texture with two or three pearls set
into it, filling most of the frame. Same lighting quality, palette, and
surface staging as the hero shot above. Very shallow depth of field (f/2.8),
background softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but the
bag laid on its side with a natural slouch, drawstrings loosely coiled beside
it rather than standing upright.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 7. Black Bucket Bag, Rainbow Beads

```
[SUBJECT]
Hero shot of a hand-crocheted black bucket bag with a sturdy top handle and
fabric lining, base trimmed in a ring of multicoloured wooden beads, amber bead
on the drawstring.

[COMPOSITION]
Product standing upright, three-quarter front angle showing the handle and
bead trim, centred with generous negative space.

[LIGHTING]
Soft directional daylight, 45° camera-left, large softbox diffusion, 4500K
warm-neutral, gentle contact shadow at base, enough fill to keep black texture
visible not crushed.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/4, shallow-medium depth of field, sharp
focus on the bead trim.

[MATERIALS & TEXTURE]
Realistic crochet texture on black thread (not flat/plastic), natural wood-bead
surface detail with visible grain.

[COLOR PALETTE]
Dominant tones: black body, multicolour bead accent, against a warm neutral
cream backdrop for contrast.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, linen surface staging, soft natural
daylight, everyday-carry artisan product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, playful-but-grounded handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, and product position — do not recompose. Only clean up the
background and lighting: replace the original backdrop with the same warm
neutral surface and soft daylight described above. The result must read as
the same photograph, naturally cleaned up — not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on the ring of multicoloured wooden beads at the base,
filling most of the frame, natural wood-grain visible. Same lighting quality,
palette, and surface staging as the hero shot above. Very shallow depth of
field (f/2.8), background softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but the
bag laid on its side with the top handle draped naturally over the body,
rather than standing upright.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 8. Maroon Tapestry Sling Bag

```
[SUBJECT]
Hero shot of a hand-crocheted tapestry-pattern sling bag in maroon, forest
green, and cream zigzag colourwork, long shoulder cord, tasselled drawstrings.

[COMPOSITION]
Product standing upright, three-quarter front angle, shoulder cord draped
naturally to one side, centred with generous negative space.

[LIGHTING]
Soft directional daylight, 45° camera-left, large softbox diffusion, 4500K
warm-neutral, gentle contact shadow at base.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/4.5, medium depth of field, sharp focus
on the zigzag colourwork pattern.

[MATERIALS & TEXTURE]
Realistic crochet texture, tack-sharp colourwork stitch definition, natural
tassel fiber detail.

[COLOR PALETTE]
Dominant tones: maroon, forest green, cream, true to product, against a warm
neutral linen backdrop.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, linen surface staging, soft natural
daylight, artisan product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, festive handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, and product position — do not recompose. Only clean up the
background and lighting: replace the original backdrop with the same warm
neutral surface and soft daylight described above. The result must read as
the same photograph, naturally cleaned up — not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on the zigzag colourwork pattern on the front panel,
filling most of the frame. Same lighting quality, palette, and surface staging
as the hero shot above. Very shallow depth of field (f/2.8), background
softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but the
bag laid flat showing the full front panel pattern square-on, shoulder cord
coiled naturally beside it.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 9. Gold Thread Potli, Pearl Beaded

```
[SUBJECT]
Hero shot of a hand-crocheted gold-thread potli bag over a gold satin lining,
scattered with white pearl beads, beaded drawstring cords.

[COMPOSITION]
Product standing upright, three-quarter front angle, centred with generous
negative space, drawstrings falling naturally in front.

[LIGHTING]
Soft directional daylight, 45° camera-left, large softbox diffusion, 4000K warm
interior, gentle highlight on metallic gold thread, contact shadow at base.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/4, shallow-medium depth of field, sharp
focus on the beaded gold mesh.

[MATERIALS & TEXTURE]
Realistic metallic thread sheen (not plastic/foil-looking), soft satin sheen
beneath, natural pearl specular highlights.

[COLOR PALETTE]
Dominant tones: warm gold, ivory pearl, against a warm neutral cream or dark
warm backdrop for contrast.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, linen or velvet surface staging, soft warm
directional light, bridal/festive artisan product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, festive handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, and product position — do not recompose. Only clean up the
background and lighting: replace the original backdrop with the same warm
neutral surface and soft directional light described above. The result must
read as the same photograph, naturally cleaned up — not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on the pearls set into the gold mesh over the satin
lining, filling most of the frame. Same lighting quality, palette, and surface
staging as the hero shot above. Very shallow depth of field (f/2.8),
background softly out of focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but the
bag laid on its side with a natural slouch, satin sheen catching the light
along the fold.

[AVOID]
(shared block above)

resolution: 2k
```

---

## 10. Gold Thread Potli, All-Gold Beaded

```
[SUBJECT]
Hero shot of a hand-crocheted gold-thread potli bag over a gold satin lining,
base trimmed in a ring of gold beads, gold-beaded drawstring tassels.

[COMPOSITION]
Product standing upright, three-quarter front angle, centred with generous
negative space, drawstrings falling naturally in front.

[LIGHTING]
Soft directional daylight, 45° camera-left, large softbox diffusion, 4000K warm
interior, gentle highlight on metallic gold thread and beads, contact shadow at
base.

[LENS & CAMERA]
Shot on 50mm standard lens, aperture f/4, shallow-medium depth of field, sharp
focus on the gold bead trim.

[MATERIALS & TEXTURE]
Realistic metallic thread sheen (not plastic/foil-looking), soft satin sheen
beneath, natural gold-bead specular highlights.

[COLOR PALETTE]
Dominant tones: warm gold monochrome, against a warm neutral cream or dark warm
backdrop for contrast.

[STYLE REFERENCE]
Warm hand-crafted lifestyle styling, linen or velvet surface staging, soft warm
directional light, bridal/festive artisan product photography register.

[BRAND INTEGRATION]
Warm oat/cream brand palette, festive handmade mood.

[QUALITY MARKERS]
Tack-sharp, hyper-detailed, photorealistic, commercial-grade.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 2 — Close to Source (preserve original framing)
```
[SOURCE-FAITHFUL VARIANT]
Use the original source photo as the primary reference. PRESERVE its exact
camera angle, crop, and product position — do not recompose. Only clean up the
background and lighting: replace the original backdrop with the same warm
neutral surface and soft directional light described above. The result must
read as the same photograph, naturally cleaned up — not a new composition.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 3 — Detail Close-up
```
[DETAIL SHOT]
Tight macro close-up on the gold bead trim ring at the base, filling most of
the frame. Same lighting quality, palette, and surface staging as the hero
shot above. Very shallow depth of field (f/2.8), background softly out of
focus.

[AVOID]
(shared block above)

resolution: 2k
```

### Angle 4 — Alternate Angle
```
[ALT ANGLE]
Same surface, lighting, palette, and styling as the hero shot above, but the
bag laid on its side with a natural slouch, gold-beaded tassels coiled beside
it.

[AVOID]
(shared block above)

resolution: 2k
```
