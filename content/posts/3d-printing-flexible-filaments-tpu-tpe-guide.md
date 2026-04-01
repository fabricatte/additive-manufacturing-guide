---
title: "3D Printing with Flexible Filaments: TPU, TPE, and Soft Materials Guide for Manufacturing"
date: 2026-04-01
draft: false
slug: "3d-printing-flexible-filaments-tpu-tpe-guide"
description: "Learn how to 3D print with flexible filaments like TPU and TPE. This guide covers material properties, printer settings, design tips, and real-world manufacturing applications for soft and elastic 3D printed parts."
image: images/3d-printing-flexible-filaments-tpu-tpe-guide.png
tags: ["3D printing", "flexible filaments", "TPU", "TPE", "additive manufacturing", "soft materials", "manufacturing"]
---

Flexible 3D printing filaments have gone from niche curiosity to production workhorse. From protective bumpers and custom gaskets to wearable devices and robotic grippers, **thermoplastic polyurethane (TPU)** and **thermoplastic elastomer (TPE)** materials are enabling manufacturers to produce soft, elastic parts that were previously impossible or prohibitively expensive with traditional methods.

Yet flexible filaments remain one of the most misunderstood material categories in additive manufacturing. Print them like PLA and you'll get jams, blobs, and failed builds. Understand their unique requirements and you'll unlock an entire class of functional production parts.

This guide covers everything you need to know about 3D printing with flexible filaments — material selection, printer setup, design rules, and real-world manufacturing applications.

## Understanding Flexible Filament Types

Not all flexible filaments are created equal. The key metric is **Shore hardness**, which measures how resistant a material is to indentation.

### TPU (Thermoplastic Polyurethane)

TPU is the most popular flexible 3D printing material, and for good reason. It offers an excellent balance of elasticity, abrasion resistance, and printability.

- **Shore hardness:** Typically 85A–95A (firm-flexible, like a shoe sole)
- **Elongation at break:** 300–600%
- **Abrasion resistance:** Excellent
- **Chemical resistance:** Good against oils, greases, and many solvents
- **Common brands:** NinjaTek NinjaFlex, Polymaker PolyFlex, BASF Ultrafuse TPU

### TPE (Thermoplastic Elastomer)

TPE is a broader category that includes softer, more rubber-like materials. These are harder to print but produce extremely flexible parts.

- **Shore hardness:** 40A–85A (soft rubber to firm rubber)
- **Elongation at break:** 400–700%
- **Printability:** More challenging due to higher elasticity
- **Common brands:** NinjaTek Cheetah, FilaFlex

### Soft PLA and Other Flexible Blends

Some manufacturers offer PLA-based flexible blends (Shore 60D–80D) that are easier to print but offer limited flexibility. These work for light-flex applications but shouldn't be confused with true elastomers.

**Quick selection guide:**

| Application | Recommended Material | Shore Hardness |
|---|---|---|
| Phone cases, bumpers | TPU 95A | 95A |
| Gaskets, seals | TPU 85A | 85A |
| Wearables, insoles | TPU 85A–95A | 85A–95A |
| Soft grippers, tubing | TPE 60A–70A | 60A–70A |
| Vibration dampeners | TPU 90A | 90A |

## Printer Requirements and Setup

Flexible filaments demand specific hardware and settings. Here's what makes or breaks a successful print.

### Hardware Considerations

**Direct drive extruders are essential.** Bowden tube setups create too much distance between the drive gear and hot end, allowing flexible filament to buckle, compress, and jam. If you're running a Bowden setup, either switch to direct drive or use a very short, constrained Bowden path.

**Constrained filament path matters.** Any gap between the drive gear and the hot end is a place where soft filament can escape. Look for extruders designed for flexibles — models with tight tolerances and enclosed filament paths.

**Heated bed is recommended** but not strictly required. A bed temperature of 40–60°C helps with first-layer adhesion without causing warping.

### Optimal Print Settings for TPU

These settings work as a reliable starting point for TPU 95A on most direct-drive FDM printers:

- **Print speed:** 20–30 mm/s (this is non-negotiable for beginners)
- **Retraction:** Minimal — 0.5–2mm distance, 20–25 mm/s speed. Many successful prints use zero retraction.
- **Nozzle temperature:** 220–240°C (varies by brand)
- **Bed temperature:** 45–60°C
- **Cooling fan:** 50–100% after first layer
- **Layer height:** 0.2mm (standard) or 0.16mm for detail
- **Infill:** 15–30% for flexibility, 50–100% for structural parts
- **Print speed for first layer:** 15–20 mm/s

### The Golden Rule: Slow Down

Speed is the number one cause of failed flexible prints. The material compresses under the drive gear, and if you push too fast, it buckles. Start at 20 mm/s and increase only after you've confirmed clean extrusion. Experienced users with well-tuned direct-drive setups can reach 40–50 mm/s, but this takes calibration.

## Design Guidelines for Flexible Parts

Designing for flexible 3D printing requires different thinking than rigid materials.

### Wall Thickness Controls Flexibility

A part's effective flexibility depends more on wall thickness and infill than the material alone. A 95A TPU part with 0.8mm walls and 10% infill will flex dramatically. The same material at 3mm walls and 100% infill will feel nearly rigid.

**Use this to your advantage:** You can tune stiffness within a single material by varying geometry rather than switching filaments.

### Minimize Supports

Flexible supports are extremely difficult to remove cleanly. Design self-supporting geometries wherever possible:

- Keep overhangs below 45°
- Use chamfers instead of sharp horizontal overhangs
- Consider splitting parts and bonding them post-print

### Account for Elephant's Foot

Flexible filaments are more prone to first-layer squish. Compensate with a small chamfer or elephant's foot compensation in your slicer (0.1–0.2mm).

### Design for Function

Leverage flexibility in your geometry:

- **Living hinges** — thin sections that allow parts to bend repeatedly
- **Lattice structures** — tunable stiffness through infill patterns
- **Bellows and accordion folds** — pneumatic actuators and seals
- **Snap-fit connections** — TPU's elasticity makes snap fits extremely durable

## Manufacturing Applications

Flexible 3D printing has moved well beyond prototyping. Here are the production use cases driving adoption.

### Custom Gaskets and Seals

Traditional gasket manufacturing requires expensive tooling for each geometry. With TPU, manufacturers produce custom seals on demand — perfect for low-volume production, legacy equipment maintenance, and rapid prototyping of sealing solutions.

### Protective Bumpers and Cases

Consumer electronics, industrial equipment, and medical devices all need impact protection. TPU parts absorb energy effectively, and 3D printing enables custom-fit protective housings without injection molding costs.

### Wearable Devices and Orthotics

The medical and sports industries use flexible 3D printing for custom insoles, braces, and wearable sensor housings. Each part can be personalized to the user's anatomy using 3D scanning data.

### Robotic End Effectors

Soft robotics is one of the fastest-growing applications. TPU and TPE grippers conform to irregular objects without damaging them — critical for food handling, electronics assembly, and logistics automation.

### Vibration Dampening

Engine mounts, equipment feet, and anti-vibration pads benefit from TPU's energy absorption. Manufacturers can tune dampening characteristics by adjusting Shore hardness and infill patterns.

## Cost and Production Considerations

Flexible filament typically costs $30–60/kg for TPU 95A, making it comparable to engineering-grade rigid filaments. The real cost factor is **print speed** — flexible parts take 2–3× longer than equivalent rigid parts due to slower speeds.

For production runs, consider:

- **Batch printing** multiple parts per build plate to maximize throughput
- **Higher-durometer TPU** (95A) for easier, faster printing when extreme softness isn't needed
- **Post-processing** is minimal — TPU parts rarely need sanding or treatment
- **Quality control** should include Shore hardness testing and elongation checks for functional parts

## Getting Started with Flexible 3D Printing

If you're evaluating flexible 3D printing for manufacturing, start here:

1. **Define your flexibility requirements** — What Shore hardness does your application need?
2. **Test with TPU 95A** — It's the most forgiving flexible material
3. **Use a direct-drive printer** — Don't fight your hardware
4. **Print slow, iterate fast** — Dial in settings on test prints before committing to production parts

Whether you need ten custom gaskets or ten thousand flexible grippers, additive manufacturing makes soft-material production accessible at every scale.

---

**Need flexible 3D printed parts for your project?** Whether it's custom TPU prototypes or production-scale flexible components, Fabricatte can help you find the right material and manufacturing process for your application. **[Get a free quote today →](https://www.fabricatte.com/quote)**

*Fabricatte — Your On-Demand Manufacturing Partner*
