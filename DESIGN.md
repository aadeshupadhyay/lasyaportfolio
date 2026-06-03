---
name: Academic Excellence
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444653'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#747684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3356c1'
  primary: '#0738a5'
  on-primary: '#ffffff'
  primary-container: '#2e52bd'
  on-primary-container: '#c6d0ff'
  inverse-primary: '#b6c4ff'
  secondary: '#5a5e6e'
  on-secondary: '#ffffff'
  secondary-container: '#dee1f6'
  on-secondary-container: '#606475'
  tertiary: '#3e444a'
  on-tertiary: '#ffffff'
  tertiary-container: '#565b61'
  on-tertiary-container: '#ced3da'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164f'
  on-primary-fixed-variant: '#103ca8'
  secondary-fixed: '#dee1f6'
  secondary-fixed-dim: '#c2c6d9'
  on-secondary-fixed: '#171b29'
  on-secondary-fixed-variant: '#424656'
  tertiary-fixed: '#dee3ea'
  tertiary-fixed-dim: '#c2c7ce'
  on-tertiary-fixed: '#171c21'
  on-tertiary-fixed-variant: '#42474d'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: manrope
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-x: 5vw
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 4rem
  section-gap: 8rem
---

## Brand & Style

This design system is defined by a scholarly and refined aesthetic, specifically tailored for high-level academic and design leadership portfolios. It prioritizes clarity, intellectual rigor, and quiet confidence through a **minimalist** approach.

The visual language draws inspiration from editorial design, using generous whitespace to allow research and creative work to breathe. It avoids unnecessary ornamentation, relying instead on structural integrity and high-quality imagery to communicate authority. The tone is professional yet accessible, creating a digital environment that feels like a curated exhibition or a prestigious journal.

## Colors

The palette is anchored in an off-white background to reduce eye strain and provide a more "paper-like" feel than pure white. 

- **Primary**: A muted but confident blue (#2E52BD) is used sparingly for active states and primary calls to action, providing a scholarly accent.
- **Secondary/Tertiary**: Slate greys provide subtle differentiation for metadata, captions, and secondary information.
- **Neutral**: Deep charcoal (#2D2D2D) is utilized for all primary text to ensure maximum legibility and a sharp, disciplined look.
- **Background**: The primary surface is an airy off-white (#F9F9F9), creating a soft foundation for content.

## Typography

The typographic system utilizes a classic serif/sans-serif pairing to balance tradition with modernity.

- **Headlines**: **Newsreader** provides a sophisticated, authoritative voice. Its varying weights are used to create a clear hierarchy in research papers and project titles.
- **Body & Labels**: **Manrope** is used for all functional text. Its geometric yet approachable structure ensures high legibility in long-form academic writing and interface labels.
- **Styling**: Large headlines should use a slight negative letter-spacing for a tighter, editorial feel. Labels and captions use increased letter-spacing and uppercase styling to distinguish them from body narrative.

## Layout & Spacing

This design system employs a **fixed grid** approach within a fluid container to ensure content remains centered and readable across all devices.

- **Grid**: A 12-column grid with 32px (2rem) gutters. 
- **Rhythm**: Vertical spacing is intentional and generous. Large section gaps (8rem) clearly demarcate different phases of a portfolio or research project.
- **Margins**: A minimum of 5vw horizontal margin ensures content does not crowd the edges of the viewport.
- **Alignment**: Text-heavy sections should follow a 6-column or 8-column center-aligned layout to optimize the line length for reading.

## Elevation & Depth

Depth is conveyed through **low-contrast outlines** and tonal layering rather than heavy shadows. This maintains the minimalist, flat aesthetic characteristic of academic publications.

- **Dividers**: Thin, 1px horizontal rules in tertiary grey (#A8ADB4) are used to separate logical sections and navigation elements.
- **Surfaces**: Differentiation between elements (like cards or inputs) is achieved by subtle shifts in background color (e.g., using white against the off-white background) and delicate borders.
- **Shadows**: When absolutely necessary for modals or menus, use a very large, soft ambient shadow with low opacity (4-8%) to mimic natural light without creating a "floating" effect.

## Shapes

The shape language is strictly **Sharp (0)**. 

To reflect the precision and structure of an academic foundation, all buttons, image containers, and input fields utilize 0px border radii. This architectural approach reinforces the feeling of an organized, grid-based layout and avoids the more "consumer-tech" feel of rounded corners. Rectangular forms emphasize the content and imagery rather than the container.

## Components

- **Buttons**: Use a "ghost" or text-link style by default. Primary buttons should be rectangular with a solid charcoal background and white text, or a transparent background with a 1px border.
- **Navigation**: Top-aligned and simple. Use a slightly smaller font size for navigation links with an underline or color shift for the active state.
- **Cards**: Minimalist containers with no shadows. Use 1px borders or subtle background fills to define the card area. Ensure imagery within cards is full-bleed to the edges of the container.
- **Input Fields**: Simple bottom-border only or 1px outlined rectangles. Focus states should be indicated by a shift to the primary blue color.
- **Dividers**: Essential for this system. Use 1px lines to separate header, content, and footer.
- **Image Captions**: Placed directly below or to the side of images in `label-sm` typography to maintain an editorial gallery feel.