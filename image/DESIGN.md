# Design System Strategy: The Organic Tactility Document

## 1. Overview & Creative North Star: "The Living Canvas"
This design system moves away from the rigid, sterile grids of traditional e-commerce. Our Creative North Star is **The Living Canvas**. We treat the mobile screen not as a flat digital plane, but as a series of organic, layered materials—like handmade paper submerged in soft light. 

To achieve a "High-End Editorial" feel, we use **intentional asymmetry**. Product images should not always be centered; they should bleed off-edge or sit offset within their containers. We prioritize "breath" over "density," using the spacing scale to create a rhythmic flow that mirrors a premium print magazine rather than a cluttered marketplace.

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in a botanical spectrum, designed to reduce cognitive load and eye strain.

*   **Primary (#3b6751):** Reserved for high-intent actions and brand moments.
*   **Secondary (#486730):** Used for supportive botanical accents and categorization.
*   **Surface System:** We rely on the `surface-container` tokens to build depth.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined through background color shifts or tonal transitions.
*   **How to section:** A `surface-container-low` section (for a "Recommended" carousel) should sit directly on a `surface` background. The change in hex value is the only divider needed.

### Surface Hierarchy & Nesting
Treat the UI as physical layers.
*   **Base:** `surface` (#f8faf8)
*   **Low-Level Content:** `surface-container-low` (#f2f4f2)
*   **Featured Cards:** `surface-container-lowest` (#ffffff) to make them "pop" forward through brightness rather than lines.

### The "Glass & Gradient" Rule
For floating elements like Navigation Bars or sticky "Add to Cart" CTAs, use **Glassmorphism**. Apply `surface_container_lowest` at 80% opacity with a `backdrop-filter: blur(12px)`. This creates a sophisticated, eco-modern transparency.
*   **Signature Texture:** Main CTAs should use a subtle linear gradient from `primary` (#3b6751) to `primary_container` (#7ba990) at a 135-degree angle to add a "silken" finish.

## 3. Typography: The Editorial Voice
We use a dual-typeface system to balance authority with readability.

*   **Display & Headlines (Plus Jakarta Sans):** These are our "Editorial" voices. Use `display-lg` and `headline-lg` with generous tracking (-0.02em) to create an expensive, curated feel. Headlines should often be left-aligned with a significant "hang" over the body text to break the vertical grid.
*   **Body & Titles (Manrope):** Chosen for its high x-height and legibility during "long browsing sessions." Use `body-lg` for product descriptions to ensure a premium reading experience.
*   **Labeling:** Use `label-md` in all-caps with +0.05em tracking for category tags (e.g., "ORGANIC," "SUSTAINABLE") to provide a clear, modern metadata layer.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital." We use **Ambient Light Simulation**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container` background. This creates a soft, natural lift.
*   **Ambient Shadows:** When a card must float (e.g., a modal or a primary product card), use a diffused shadow: `box-shadow: 0 12px 32px rgba(25, 28, 27, 0.04)`. The color is a tinted version of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a container requires more definition (e.g., in high-glare environments), use a "Ghost Border": `outline-variant` (#c4c8ba) at 15% opacity.
*   **Radius Strategy:** Use `xl` (1.5rem / 24px) for large containers and `lg` (1rem / 16px) for inner cards. This "nested rounding" creates a friendly, modern rhythm.

## 5. Components: Botanical Primitives

### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`. Radius: `full`. Padding: `4` (1.4rem) horizontal.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Tertiary:** Text-only using `primary` color, with an `md` spacing gap between icon and label.

### Cards & Lists
*   **The Divider Ban:** Under no circumstances should 1px lines be used between list items. Use a `spacing-4` (1.4rem) vertical gap or alternating `surface-container-low` backgrounds.
*   **Product Cards:** Use `surface-container-lowest` with an `xl` radius. Ensure the image has a `low` radius inside the card for a "framed" look.

### Input Fields
*   **Styling:** Use `surface-container-low` as the fill. Do not use an outline. Upon focus, transition the background to `surface-container-highest` and add a subtle `primary` glow (2px blur).
*   **Labels:** Always use `label-md` positioned 0.5rem above the input.

### Glass Modals (Custom Component)
*   **Usage:** For "Quick View" or "Filter" drawers. 
*   **Style:** `surface-container-lowest` @ 85% opacity, `xl` top-radius, backdrop-blur 16px. This keeps the user connected to the eco-friendly context of the shop below.

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. For example, a `32px` left margin and a `20px` right margin for hero text can create a custom, high-end feel.
*   **Do** allow product photography to overlap different surface-container colors.
*   **Do** use the `secondary` green (#486730) for "Sustainability badges" to create a psychological link to nature.

### Don't:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#191c1b) to maintain the "soft" visual profile.
*   **Don't** use standard "Material Design" elevation levels (1-5). Stick to the tonal layering of the surface-container tokens.
*   **Don't** crowd the interface. If a screen feels "full," increase the spacing token by one level (e.g., move from `spacing-6` to `spacing-8`).