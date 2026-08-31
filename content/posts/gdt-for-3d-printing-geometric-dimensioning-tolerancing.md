---
title: "GD&T for 3D Printing: How to Apply Geometric Dimensioning and Tolerancing to Additively Manufactured Parts"
date: 2026-08-31
description: "Learn how to apply GD&T (Geometric Dimensioning and Tolerancing) to 3D printed parts. Understand flatness, concentricity, position tolerances, and best practices for specifying additive manufacturing dimensions."
image: images/gdt-for-3d-printing-geometric-dimensioning-tolerancing.png
tags: ["3D printing GD&T", "geometric dimensioning tolerancing additive manufacturing", "3D printing tolerances", "3D printing engineering drawings", "additive manufacturing quality"]
slug: gdt-for-3d-printing-geometric-dimensioning-tolerancing
---

# GD&T for 3D Printing: How to Apply Geometric Dimensioning and Tolerancing to Additively Manufactured Parts

Geometric Dimensioning and Tolerancing (GD&T) has been the backbone of precision manufacturing for decades. But when engineers bring their drawings to additive manufacturing, a common question arises: **does GD&T still apply to 3D printed parts?**

The answer is absolutely yes — but with important caveats. 3D printing introduces unique geometric behaviors that traditional machining doesn't, and understanding how GD&T translates to additive processes is critical for producing functional, repeatable parts.

In this guide, we'll break down how each major GD&T control applies to 3D printed parts, what tolerances are realistically achievable, and best practices for specifying dimensions on additively manufactured components.

## What Is GD&T and Why Does It Matter for 3D Printing?

GD&T is a system defined by the ASME Y14.5 standard (and ISO 1101 internationally) that uses symbols and rules to communicate engineering tolerances. Rather than relying solely on plus-minus linear dimensions, GD&T controls the **form, orientation, location, and runout** of features relative to datum references.

For 3D printing, GD&T matters because:

- **Additive processes produce anisotropic parts** — properties and dimensional accuracy differ between the XY plane and Z axis
- **Surface finish varies** by orientation, requiring careful tolerance callouts
- **Build orientation affects achievable tolerances** for nearly every GD&T control
- **Post-processing steps** (machining, vapor smoothing) can tighten tolerances on critical features

Without proper GD&T callouts, manufacturers and service bureaus are left guessing which dimensions are critical — leading to rejected parts, costly rework, or over-engineering that drives up production costs.

## How GD&T Controls Apply to 3D Printed Parts

### Form Controls: Flatness, Straightness, Circularity, and Cylindricity

**Flatness** is one of the most challenging GD&T controls for 3D printing. Parts built on FDM printers commonly exhibit warping on large flat surfaces, especially with materials like ABS and nylon. SLS and MJF parts can also show slight warping due to thermal gradients during the build.

**Achievable flatness tolerances:**
- FDM: 0.2–0.5 mm over 100 mm
- SLA/DLP: 0.05–0.15 mm over 100 mm
- SLS/MJF: 0.1–0.3 mm over 100 mm
- Metal DMLS/SLM: 0.05–0.2 mm over 100 mm (stress-relieved)

**Circularity and cylindricity** are heavily influenced by build orientation. A hole printed vertically (axis parallel to Z) will typically be more circular than one printed horizontally, which tends to exhibit an oblong cross-section due to layer stacking and overhangs.

**Best practice:** Always specify which features require tight form tolerances. This tells the manufacturer to orient the build appropriately and apply post-processing where necessary.

### Orientation Controls: Perpendicularity, Angularity, and Parallelism

Orientation controls define how features relate to datum surfaces. In 3D printing, **perpendicularity** between vertical walls and the build plate is generally excellent — layers stack precisely in the Z direction.

However, **parallelism** between two horizontal surfaces can be more problematic, especially over long distances where thermal warping accumulates. For SLA parts, parallelism is typically very good since the process uses photopolymerization rather than thermal fusion.

**Key consideration:** When calling out perpendicularity or angularity on 3D printed parts, specify the datum carefully. Using the build plate contact surface as a datum (Datum A) is natural for additive manufacturing and provides the most repeatable reference.

### Position Tolerances

**True position** is arguably the most commonly used GD&T control in mechanical design, and it translates well to 3D printing — with some important notes.

Hole position accuracy in 3D printing depends on:

1. **Printer calibration** — well-calibrated machines achieve ±0.1 mm positional accuracy
2. **Feature size** — smaller holes are proportionally less accurate
3. **Build orientation** — holes printed in the Z axis are more accurately positioned
4. **Material shrinkage** — semi-crystalline materials (nylon, PP) shrink more than amorphous ones (ABS, PC)

**Achievable position tolerances:**
- FDM: ±0.2–0.5 mm
- SLA/DLP: ±0.05–0.15 mm
- SLS/MJF: ±0.1–0.3 mm
- Metal DMLS/SLM: ±0.05–0.1 mm

For tighter positional accuracy, specify critical holes as undersized and ream or drill to final dimension. Many additive manufacturing workflows combine 3D printing with light CNC finishing on critical features.

### Profile Tolerances

**Profile of a surface** and **profile of a line** are powerful GD&T controls for 3D printing because they can control complex freeform surfaces — exactly the kind of geometry that additive manufacturing excels at producing.

When specifying profile tolerances on organic or topology-optimized shapes, consider that:

- Stairstepping on curved surfaces adds roughness that may fall outside tight profile zones
- Increasing layer resolution (thinner layers) tightens profile conformance but increases build time
- SLA and DLP naturally produce smoother curves than FDM
- Post-processing (sanding, vapor smoothing) can bring surfaces within tighter profile tolerances

### Runout and Concentricity

**Circular runout** and **total runout** are critical for rotating parts like shafts, pulleys, and bearing housings. While 3D printing can produce these features, achieving tight runout tolerances typically requires post-machining on a lathe.

**Concentricity** — controlling the alignment of axis centers — is similarly challenging in additive manufacturing alone. For parts where concentricity matters (e.g., bearing bores, motor housings), the best approach is to:

1. Print features slightly undersized
2. Machine critical bores on a lathe or mill
3. Achieve concentricity values of 0.02–0.05 mm through hybrid manufacturing

## Best Practices for Applying GD&T to 3D Printed Parts

### 1. Classify Features by Criticality

Not every dimension on a 3D printed part needs a tight GD&T callout. Identify **critical-to-function (CTF)** features and apply GD&T only where needed. This keeps manufacturing costs reasonable and avoids unnecessary post-processing.

### 2. Specify Build Orientation on Drawings

Traditional manufacturing drawings don't include build orientation, but for 3D printing it's essential. Add a note or supplementary view showing the preferred build orientation relative to your datum structure. This prevents the manufacturer from choosing an orientation that compromises your critical tolerances.

### 3. Design Datum Features for Additive Manufacturing

Choose datum features that are naturally well-controlled in 3D printing:

- **Large flat surfaces** parallel to the build plate make excellent primary datums
- **Cylindrical features** printed along the Z axis serve well as secondary datums
- Avoid using overhanging or supported surfaces as datums — they have inherently lower accuracy

### 4. Account for Material-Specific Behavior

Different 3D printing materials behave differently:

| Material | Shrinkage | Warping Risk | Best For Tight Tolerances? |
|----------|-----------|--------------|---------------------------|
| PLA | Low (0.3–0.5%) | Low | Yes — most dimensionally stable FDM material |
| ABS | Medium (0.7–0.8%) | High | Moderate — requires heated chamber |
| Nylon (PA12) | Medium (1.5–2.0%) | Medium | Yes with SLS/MJF |
| Standard Resin | Very Low | Low | Excellent dimensional accuracy |
| Stainless Steel (DMLS) | Low | Medium | Excellent after stress relief |

### 5. Use Bonus Tolerances and MMC/LMC Modifiers

Maximum Material Condition (MMC) and Least Material Condition (LMC) modifiers are especially useful for 3D printed parts because they allow **bonus tolerance** when features are produced away from their worst-case size.

Since 3D printing naturally produces slight size variations, applying MMC modifiers to position callouts on clearance holes gives manufacturers more room while still ensuring parts assemble correctly.

### 6. Combine Additive and Subtractive Processes

For parts that require tight GD&T controls on specific features, consider a **hybrid approach**: 3D print the bulk geometry and machine critical surfaces, bores, and mating features. This leverages the geometric freedom of additive manufacturing while achieving the precision of CNC machining where it matters most.

## Industry Standards for 3D Printing Tolerances

Several standards now address dimensional inspection of additively manufactured parts:

- **ISO/ASTM 52902** — Standard guide for additive manufacturing test artifacts for dimensional capability assessment
- **ISO 52900** — General principles and terminology for additive manufacturing
- **ASME Y14.46** — Product definition for additive manufacturing (extends Y14.5 GD&T for AM-specific needs)

The emerging **ASME Y14.46** standard is particularly important — it introduces new drawing practices specifically for additive manufacturing, including notation for build orientation, support structure zones, and surface finish expectations based on feature orientation.

## Inspection Methods for GD&T on 3D Printed Parts

Verifying GD&T compliance on 3D printed parts typically uses:

- **CMM (Coordinate Measuring Machine)** — gold standard for position, profile, and orientation verification
- **3D scanning** — ideal for profile tolerances on complex organic shapes
- **Optical comparators** — useful for 2D profile checks on cross-sections
- **CT scanning** — enables internal feature inspection without cutting the part

For production runs, establishing a **First Article Inspection (FAI)** process that maps all GD&T callouts to specific measurements ensures consistent quality.

## Ready to Manufacture Precision 3D Printed Parts?

Applying GD&T to 3D printing doesn't have to be complicated. The key is understanding what each additive process can achieve and specifying tolerances accordingly.

Whether you need tight-tolerance prototypes or production parts with verified GD&T compliance, working with an experienced additive manufacturing partner makes all the difference.

**[Get a quote from Fabricatte](https://www.fabricatte.com/quote)** — our team can review your drawings, recommend optimal build orientations, and deliver parts that meet your GD&T requirements.

*Fabricatte — Precision Additive Manufacturing, From Prototype to Production.*
