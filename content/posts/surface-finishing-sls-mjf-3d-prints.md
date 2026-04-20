---
title: "Surface Finishing for SLS and MJF 3D Prints: Dyeing, Smoothing, and Coating Techniques for Production Parts"
date: 2026-04-20
description: "Learn how to finish SLS and MJF 3D printed parts for production use. This guide covers dyeing, vapor smoothing, tumble finishing, painting, and coating techniques that transform raw powder bed prints into professional end-use components."
image: images/surface-finishing-sls-mjf-3d-prints.png
tags:
  - post-processing
  - SLS
  - MJF
  - surface finishing
  - production
---

Surface finishing is where SLS and MJF 3D printed parts go from functional prototypes to production-ready components. Raw powder bed prints have a characteristically grainy texture—useful for grip but rarely acceptable for consumer products, medical devices, or visible automotive parts. The right finishing workflow can deliver injection-mold-quality surfaces while preserving the dimensional accuracy and mechanical properties that make [powder bed technologies](/posts/sls-vs-mjf-3d-printing/) so valuable for manufacturing.

In this guide, we break down the most effective surface finishing techniques for SLS and MJF parts, when to use each method, and how to combine them into scalable production workflows.

## Why Surface Finishing Matters for Powder Bed Prints

SLS (Selective Laser Sintering) and MJF (Multi Jet Fusion) parts are sintered from nylon powder, leaving a porous, rough surface with typical Ra values of 8–15 µm. While this is fine for internal components or engineering prototypes, production applications often demand:

- **Smoother surfaces** for consumer-facing products
- **Color consistency** for branding and aesthetics
- **Sealed porosity** for fluid-handling or food-contact applications
- **Enhanced durability** through protective coatings
- **Consistent appearance** across large production batches

The finishing method you choose depends on your part geometry, production volume, performance requirements, and budget. Most production workflows combine two or three techniques in sequence.

## Tumble Finishing and Vibratory Polishing

Tumble finishing is the workhorse of powder bed post-processing. Parts are loaded into a vibratory or rotary tumbler with abrasive media—ceramic, plastic, or steel shapes—that gradually smooth the surface through controlled abrasion.

**Best for:** High-volume parts with simple to moderate geometry

**Process details:**
- Cycle times range from 30 minutes for light smoothing to 4+ hours for high polish
- Ceramic media delivers aggressive material removal; plastic media is gentler for delicate features
- Wet tumbling with compounds reduces dust and improves surface quality
- Automated systems can process hundreds of parts per batch

**Results:** Surface roughness drops to Ra 2–6 µm. Parts lose the characteristic powder bed graininess and develop a matte-smooth feel similar to injection-molded nylon.

**Limitations:** Tumbling rounds sharp edges and can obscure fine details. Internal channels and deep recesses remain untouched. Thin walls below 1.5 mm risk damage—review your [design guidelines](/posts/design-rules-for-3d-printing/) before finishing.

## Vapor Smoothing

Vapor smoothing uses chemical solvents in a sealed chamber to melt and reflow the outer surface of nylon parts. The most common systems use proprietary solvent blends designed specifically for PA 11 and PA 12 nylon.

**Best for:** Consumer products, medical devices, and parts requiring sealed surfaces

**Process details:**
- Parts are suspended in a chamber where heated solvent vapor condenses on the surface
- The condensed solvent dissolves a thin outer layer (typically 20–50 µm), which reflows to fill porosity and smooth texture
- Cycle times are 30–90 minutes depending on the system and desired finish level
- Leading systems include AMT PostPro and DyeMansion Powerfuse

**Results:** Surfaces reach Ra 1–3 µm—approaching injection-mold quality. The process seals surface porosity, making parts watertight and easier to clean. Mechanical properties are largely preserved, though elongation at break may slightly increase due to the surface reflow.

**Limitations:** Vapor smoothing adds cost ($2–8 per part depending on size and batch). Very large parts may require specialized chamber sizes. The process works best with nylon; other powder bed materials like TPU or PP require different solvent formulations.

## Dyeing

Raw SLS and MJF parts are white or gray, which limits their use in consumer and branded products. Dyeing transforms these parts with rich, consistent color throughout the outer surface layer.

**Best for:** Consumer products, retail displays, any application where color matters

**Process details:**
- Parts are immersed in heated dye baths (typically 60–90°C) for 5–30 minutes
- Dye penetrates 0.2–0.5 mm into the nylon surface, making it resistant to scratching and wear
- Black is the most common and reliable color; other colors are available but may vary by material
- MJF parts from HP systems already have a gray base that affects final color—factor this into color matching
- Dyeing is typically done after tumbling but before vapor smoothing or coating

**Results:** Uniform color that withstands handling and moderate UV exposure. Professional dye systems from companies like DyeMansion offer color-matched Pantone and RAL options for brand consistency.

**Limitations:** Very light colors (white, pastel) are difficult to achieve on MJF parts due to the gray base. Dye only affects the outer surface layer—deep scratches or machining will reveal the base material color.

## Painting and Coating

For the highest-quality visual finish or specialized functional properties, painting and coating are the go-to techniques. These range from simple spray coating to automotive-grade multi-layer paint systems.

**Best for:** Visible components, automotive interior parts, functional coatings (EMI shielding, conductivity, chemical resistance)

### Spray Painting

- Primer fills remaining surface porosity and provides a uniform base
- Two to three coats of paint deliver color and finish (matte, satin, or gloss)
- Clear coat adds scratch resistance and UV stability
- Can be automated with robotic spray systems for production volumes

### Functional Coatings

- **Soft-touch coating:** Adds a premium rubber-like feel for consumer electronics and automotive interiors
- **EMI shielding:** Conductive paint or vacuum-metalized coatings for electronic enclosures
- **Ceramic coating:** Enhances heat and chemical resistance for industrial applications
- **Metal plating:** Electroless nickel or copper plating creates a metal-appearance finish with added wear resistance

**Results:** Painted SLS/MJF parts are visually indistinguishable from injection-molded parts. Functional coatings can add entirely new properties to nylon parts.

**Limitations:** Painting is labor-intensive and adds significant per-part cost. Multi-layer systems require careful process control to ensure adhesion and consistency—tie this into your [quality control](/posts/3d-printing-quality-control-inspection/) workflow.

## Building a Production Finishing Workflow

The most effective production finishing combines techniques in a specific sequence. Here is a typical high-volume workflow:

**Step 1: Depowdering and cleaning** — Remove all loose powder using compressed air, bead blasting, or automated depowdering systems.

**Step 2: Tumble finishing** — Smooth surfaces and remove layer lines. 1–2 hours in vibratory media.

**Step 3: Dyeing** — Immerse in heated dye bath for color. 15–30 minutes.

**Step 4: Vapor smoothing** — Seal porosity and achieve final surface quality. 30–60 minutes.

**Step 5: Inspection** — Verify dimensions, surface quality, and color against specifications. Automated vision systems help at scale.

For lower-volume or cost-sensitive applications, you can skip steps. Tumbling alone delivers a significant improvement. Dyeing plus tumbling covers most functional applications. Vapor smoothing is the premium step that justifies its cost when surface seal or aesthetics are critical.

## Cost and Throughput Considerations

Surface finishing adds $1–15+ per part depending on the techniques used and batch size:

| Technique | Per-Part Cost | Throughput |
|-----------|--------------|------------|
| Tumble finishing | $0.50–2.00 | 100+ parts/batch |
| Dyeing | $0.50–1.50 | 50–200 parts/batch |
| Vapor smoothing | $2.00–8.00 | 20–100 parts/batch |
| Spray painting | $5.00–15.00+ | 10–50 parts/batch |

When [analyzing costs](/posts/3d-printing-cost-analysis-vs-traditional-manufacturing/) for production parts, always factor in finishing. A $3 SLS part that needs $8 in finishing may not be competitive with injection molding—but that same part with $2 in tumbling and dyeing often is, especially at volumes below 5,000 units.

## Choosing the Right Finish for Your Application

- **Internal or hidden components:** Depowdering only, or light tumbling
- **Functional prototypes:** Tumble finishing
- **Consumer products:** Tumbling + dyeing + vapor smoothing
- **Automotive or medical:** Full workflow including painting or functional coatings
- **Scaling production:** Invest in automated finishing equipment to reduce per-part labor—this integrates directly with [print farm scaling strategies](/posts/scaling-3d-printing-production-print-farms/)

## Ready to Produce Finished 3D Printed Parts?

Surface finishing transforms SLS and MJF prints from rough prototypes into production components that rival injection molding in appearance and performance. The key is matching the right finishing workflow to your application requirements and production volume.

**Need help choosing the right 3D printing technology and finishing process for your production parts?** [Get a free quote from Fabricatte](https://fabricatte.com/quote) and let our team recommend the optimal workflow for your project.

*Fabricatte — Automate to Fabricate*
