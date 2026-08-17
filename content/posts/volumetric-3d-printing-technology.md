---
title: "Volumetric 3D Printing: How This Next-Generation Technology Prints Entire Objects in Seconds"
date: 2026-08-17
draft: false
image: images/volumetric-3d-printing-technology.png
description: "Discover how volumetric 3D printing uses light projection and photosensitive resin to create entire objects in seconds—no layers, no supports. Learn how this breakthrough technology is transforming additive manufacturing."
tags: ["volumetric 3D printing", "tomographic printing", "3D printing technology", "additive manufacturing", "resin 3D printing"]
---

Every mainstream 3D printing technology—FDM, SLA, SLS, even metal powder bed fusion—builds objects one layer at a time. Volumetric 3D printing throws that paradigm out entirely. Instead of stacking cross-sections, it projects carefully computed patterns of light into a rotating vial of photosensitive resin, solidifying an entire object in seconds rather than hours.

It sounds like science fiction, but companies like **xolo** (Germany), **Readily3D** (Switzerland), and research groups at UC Berkeley and EPFL have already demonstrated working volumetric printers. Here's how volumetric 3D printing technology works, why it matters, and where it's headed.

## How Volumetric 3D Printing Works

Volumetric printing—also called **tomographic additive manufacturing** or **computed axial lithography (CAL)**—borrows its core idea from medical CT scanning, but in reverse.

### The Basic Process

1. **Digital model to projections.** Software takes a 3D model and computes a set of 2D light patterns using a Radon transform—the same math behind CT reconstruction. Each pattern corresponds to a specific angle of rotation.

2. **Light projection into resin.** A DLP or laser projector beams these computed patterns into a transparent glass vial filled with photosensitive resin. The vial rotates continuously on a motorized stage.

3. **Cumulative dose solidification.** As the vial completes a full rotation, different regions of the resin accumulate different amounts of light energy. Where the cumulative light dose exceeds the resin's polymerization threshold, the material solidifies. Below-threshold areas remain liquid.

4. **Part extraction.** After roughly 30 to 120 seconds of exposure, the operator drains the uncured resin and removes the finished part—no peeling, no layer lines, no support removal.

The key insight is that light from many angles can superimpose constructively at precise 3D coordinates inside the resin volume. By carefully calculating the intensity pattern for each projection angle, the system controls exactly where solidification occurs.

## Advantages of Volumetric 3D Printing

### Extraordinary Speed

Traditional SLA might take 4–8 hours for a detailed part. Volumetric printers have demonstrated build times of **30 to 120 seconds** for centimeter-scale objects. The entire geometry forms simultaneously rather than tracing one layer at a time.

### No Support Structures Required

Because the part solidifies within a liquid resin bath, there's no gravity-driven sagging during the build. Overhangs, bridges, and enclosed cavities print without supports—eliminating post-processing and material waste.

### Superior Surface Finish

Without discrete layers, volumetric parts exhibit **isotropic surface quality**. There are no staircase artifacts or layer lines, which means smoother surfaces and more consistent mechanical properties in all directions.

### Gentle on Delicate Geometries

The process applies no mechanical force to the part during fabrication. This makes it ideal for printing around pre-existing objects (overmolding), encapsulating electronics, or fabricating delicate lattice structures that would break during conventional print removal.

### Printing Around Inserts

Researchers have demonstrated printing resin directly around metal inserts, wires, and sensors—something layer-based methods struggle with because the recoater blade or build platform would collide with the embedded object.

## Current Limitations

### Build Volume Constraints

Today's volumetric printers are limited to relatively small build volumes—typically in the range of **1–10 cm diameter vials**. The optical setup must maintain sharp focus and adequate light intensity across the entire resin volume, which gets exponentially harder at larger scales.

### Material Restrictions

Volumetric printing requires resins with very specific photo-response curves. The resin must be transparent enough for light to penetrate the full volume, yet responsive enough to cure within the short exposure window. This limits the available material palette compared to conventional SLA or DLP resins.

### Resolution Trade-offs

While surface finish is excellent, the volumetric resolution (typically **50–100 µm**) currently lags behind high-end micro-SLA systems that achieve 25 µm or finer. The resolution is governed by projector pixel size, optical quality, and light scattering within the resin.

### Oxygen Inhibition and Thermal Effects

Dissolved oxygen in the resin can inhibit polymerization unpredictably, and the rapid energy input can cause localized heating. Both effects need careful management to ensure consistent part quality.

## Key Players in Volumetric 3D Printing

- **xolo (Berlin):** Their xube printer targets bioprinting and microfluidics applications using two-color volumetric printing with photoswitch-based resins. This approach enables even finer control over where curing occurs.

- **Readily3D (Lausanne):** A spin-off from EPFL, Readily3D developed the Tomolite platform for rapid prototyping of centimeter-scale parts in seconds. They focus on dental, medical device, and research applications.

- **UC Berkeley CAL Project:** The research group that pioneered computed axial lithography has published foundational work on tomographic printing and continues pushing resolution and material boundaries.

- **EPFL (Lausanne):** Professor Christophe Moser's lab has demonstrated volumetric printing of hydrogels for tissue engineering and bioprinting applications.

## Manufacturing Applications

### Medical Devices and Bioprinting

Volumetric printing's gentle, support-free process is ideal for **soft hydrogels and biocompatible materials**. Researchers have printed cell-laden hydrogel structures that maintain high cell viability—something difficult with layer-based methods where shear forces can damage living cells.

### Dental and Orthodontic Models

The speed advantage is compelling for dental labs that need dozens of models per day. A volumetric printer could potentially produce a dental model in under a minute versus 30–60 minutes on a conventional DLP printer.

### Microfluidics and Lab-on-a-Chip

Small, complex internal channels are notoriously difficult to print with layer-based methods due to support removal challenges. Volumetric printing's ability to create enclosed channels without supports makes it a natural fit for **microfluidic device fabrication**.

### Rapid Prototyping at Scale

For product development teams that need fast iteration on small parts, volumetric printing could compress design cycles dramatically—turning what was a next-day prototype into a same-minute prototype.

## The Future of Volumetric 3D Printing

Volumetric printing is still in its early stages, but the trajectory is clear. Ongoing research is focused on:

- **Scaling build volumes** beyond 10 cm through improved optics and multi-projector setups
- **Expanding material options** with new photoinitiator chemistries and composite resins
- **Improving resolution** toward the 10 µm range using higher-resolution projectors
- **Multi-material volumetric printing** using wavelength-selective resins

As these challenges are addressed, volumetric 3D printing could become the go-to technology for small, complex parts that need to be produced fast—complementing rather than replacing existing additive manufacturing methods.

## Ready to Explore Advanced 3D Printing for Your Next Project?

Whether you're evaluating cutting-edge technologies like volumetric printing or need production parts using proven methods like SLA, SLS, or MJF, having the right manufacturing partner matters.

**[Get a free quote from Fabricatte](https://www.fabricatte.com/quote)** and let our team help you choose the best additive manufacturing approach for your application.

---

*Fabricatte — Your Partner in Additive Manufacturing.*
