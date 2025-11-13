# Design Guidelines: 51 Métodos de Musculação - Sales Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from high-converting fitness/education landing pages like Udemy, Hotmart, and modern SaaS checkout flows. This is a conversion-optimized sales page requiring clear hierarchy, trust signals, and strategic CTAs.

## Core Design Principles
- **Conversion-Focused**: Every section designed to guide users toward purchase
- **Trust & Credibility**: Clean, professional aesthetic that builds confidence
- **Scarcity & Urgency**: Visual hierarchy emphasizing value and limited-time nature
- **Mobile-First**: Optimized for quick mobile purchases

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Inter' - Modern, highly legible sans-serif for body and UI
- Headlines: 'Poppins' - Bold, attention-grabbing for hero and section titles

**Type Scale**:
- Hero Headline: 48px/56px (mobile: 32px/40px), Poppins Bold
- Section Headers: 36px/44px (mobile: 28px/36px), Poppins SemiBold
- Subheadlines: 20px/28px (mobile: 18px/26px), Inter Medium
- Body Text: 16px/24px, Inter Regular
- CTA Buttons: 18px/24px, Inter SemiBold
- Small Text/Captions: 14px/20px, Inter Regular

## Layout & Spacing System

**Container Widths**:
- Maximum content width: `max-w-6xl` (1152px)
- Checkout section: `max-w-4xl` (896px)
- Text content: `max-w-3xl` for readability

**Spacing Primitives** (Tailwind units):
- Micro spacing: `2, 3, 4` (8px, 12px, 16px)
- Component spacing: `6, 8, 12` (24px, 32px, 48px)
- Section spacing: `16, 20, 24` (64px, 80px, 96px)
- Vertical rhythm: `py-16` (desktop), `py-12` (mobile) for sections

## Color Implementation

**Primary Palette** (as specified):
- Brand Blue: `#1a73e8` - Headers, links, trust badges
- CTA Orange: `#ff6b00` - Primary buttons, price highlights, urgency elements
- Background: `#f7f7f7` - Page background, card backgrounds use `#ffffff`
- Text Primary: `#333333` - Body text, descriptions
- Success Green: `#28a745` - Checkmarks, benefit lists, guarantee badges

**Supporting Colors**:
- Text Secondary: `#666666` - Supporting text, captions
- Border/Divider: `#e0e0e0` - Section dividers, card borders
- Error Red: `#dc3545` - Form validation

## Page Structure & Sections

### 1. Hero Section (Full viewport height)
- Large hero image showing fitness/training (full-bleed background)
- Centered content overlay with semi-transparent dark backdrop
- Headline + Subheadline + Primary CTA button (orange, large, blurred background)
- Trust indicator below CTA: "Acesso imediato • PDF + Vídeos"
- Scroll indicator at bottom

### 2. Problem Section
- Single column, centered text block with `max-w-3xl`
- Dark background (`#333333`) with white text for contrast
- Large opening quote styling for the problem statement
- Padding: `py-20`

### 3. Solution Section
- Two-column layout (desktop), stacked (mobile)
- Left: Product mockup image (e-book cover visualization)
- Right: 4 bullet points with check icons (green)
- Each bullet: Icon + Bold headline + Description
- White background card with subtle shadow

### 4. Benefits Grid
- 2x2 grid (desktop), single column (mobile)
- Each benefit card: Icon, headline, short description
- Cards with white background, hover lift effect
- Consistent padding: `p-8`

### 5. Offer Section (Highlight Box)
- Centered, max-width container with border accent (blue)
- Large price display: "R$29" in orange, large font (48px)
- Strikethrough original price if showing discount
- Bonus callout with green badge
- Primary CTA button (extra large)
- Secondary text: "Satisfação garantida em 7 dias"

### 6. Order Bumps / Checkout Section
- Distinct background color (`#f0f0f0`) to separate from content
- Product summary card (sticky on desktop)
- 3 order bump checkboxes with product cards:
  - Each card: Checkbox, title, price, brief description
  - Visual indication when selected (blue border)
  - Live price calculation showing total
- Form fields: Name, Email, minimal friction
- Large checkout button (orange) at bottom

### 7. FAQ Section
- Accordion-style questions (3 items)
- Question in blue, answer revealed on click
- Icons: + (closed), - (open)
- White background cards with spacing

### 8. Guarantee Banner
- Full-width section with green background
- Badge icon + "7 dias de garantia" headline
- Brief reassurance text
- Light green background (`#28a74520` - green with opacity)

### 9. Footer
- Simple, clean footer
- Copyright, links to terms/privacy
- No newsletter signup (conversion-focused page)

## Component Library

**Buttons**:
- Primary CTA: Orange background, white text, rounded-lg, px-8 py-4, shadow-lg, uppercase tracking-wide
- Secondary: Blue outline, blue text, same sizing
- Hover: Slight scale (1.05), darker shade
- Disabled state: Opacity 50%, no interaction

**Cards**:
- White background, rounded-xl, shadow-sm
- Padding: `p-6` to `p-8`
- Hover: shadow-md transition

**Form Inputs**:
- Border: `#e0e0e0`, rounded-lg
- Focus: Blue border, subtle shadow
- Padding: `px-4 py-3`
- Labels: Above input, text-sm, text-gray-700

**Icons**:
- Use Heroicons via CDN
- Size: w-6 h-6 for bullets, w-8 h-8 for section icons
- Color: Inherit from parent or specific (green for checks)

**Badges**:
- Rounded-full, small padding (px-3 py-1)
- Background colors per purpose (green for guarantee, orange for urgency)

## Images

**Required Images**:
1. **Hero Background**: Full-width fitness/gym training photo, high-energy, showing results (1920x1080px minimum)
2. **E-book Mockup**: 3D render or flat mockup of PDF cover (800x1000px)
3. **Product Preview**: Screenshot of internal pages or training demonstration (1200x800px)

**Image Treatment**:
- Hero: Overlay with gradient (dark at bottom: rgba(0,0,0,0.4))
- Mockups: Drop shadow for depth
- Optimization: WebP format, compressed
- Alt text: Descriptive for accessibility

## Responsive Behavior

**Breakpoints**:
- Mobile: < 640px (single column everything)
- Tablet: 640px - 1024px (2-column where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations**:
- Hero text smaller, button full-width
- Grid sections stack to single column
- Sticky checkout summary at bottom on mobile
- Touch-friendly button sizes (min 44px height)
- Reduced padding/spacing (py-12 instead of py-20)

## Conversion Optimization Details

- **Above-fold CTA**: Primary button visible without scrolling
- **CTA Repetition**: Orange CTA appears 3 times (Hero, Offer, Checkout)
- **Trust Signals**: Guarantee badge, immediate access mention, secure checkout indicator
- **Visual Hierarchy**: Price and CTAs most prominent (orange), supporting info in blue/gray
- **Scarcity**: Optional countdown timer can be added near checkout
- **Progress Indicators**: Clear steps if multi-page checkout implemented

## Accessibility
- Color contrast ratios meet WCAG AA standards (4.5:1 minimum)
- Focus states visible on all interactive elements
- Semantic HTML structure (h1, h2, etc.)
- ARIA labels for icons and interactive components
- Keyboard navigation fully supported

This design creates a high-converting, professional sales page optimized for the Brazilian fitness market while respecting the provided copy and color specifications.