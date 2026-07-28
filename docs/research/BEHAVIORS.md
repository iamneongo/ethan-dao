# Behaviors & Design Tokens — Helena Luxury Homes

## Design tokens (from getComputedStyle)
- **Font family:** `Montserrat, sans-serif` (all text). Weights used: 300/400/500/600/700.
- **H2 section headings:** 41px / weight 600 / line-height 48px / UPPERCASE / slight tracking. White on dark sections, `#4f4e4e` on light.
- **Body paragraph:** 14px / weight 400 / line-height ~23px. `#4f4e4e` on light, white on dark.
- **Nav links:** ~14px, normal case, letter-spacing ~0.5px.

### Colors
| Token | Value | Use |
|-------|-------|-----|
| gold | `#f7bf0d` | brand accent, buttons, badges, hamburger, social icons |
| gold-light | `#f4d760` | hover/gradient gold |
| dark-gray | `#4d4d4d` | dark section bg |
| text | `#4f4e4e` | primary text on light |
| muted | `#637381` | secondary text |
| near-black | `#211f1f` | headings emphasis |
| off-white | `#eeede9` | subtle light bg |
| green | `#2fb780` | success (form) |
| white | `#ffffff` | light bg |

## Nav scroll behavior
- **State A (top, over hero):** transparent bg, white eXp/Helena logos, white nav text, white outlined circle hamburger. Tall (~150px).
- **State B (scrolled > ~100px):** solid white bg, black logos + text, **gold filled circle hamburger**, subtle shadow, shorter (~110px). transition ~0.3s ease.

## Carousels
- Sections 8 (testimonials) & 11 (featured properties): horizontal card carousels, click prev/next circular buttons. Featured Properties uses **gold** buttons; testimonials use **white/outline** buttons.

## Home valuation (section 14)
Multi-step: address input → "Get your instant home valuation" / "Get the best price for your home" / "Reach out for more information" states with Back-to-search. Clone as address input + gold CTA (single visible step, mock).

## Hover states
- Buttons: gold buttons darken slightly; outline buttons fill on hover.
- Property/neighborhood cards: image scale ~1.05, overlay darken, transition ~0.4s ease.
- Nav links: color shift to gold.

## Responsive (breakpoints ~768 / ~1024)
- Nav collapses to logo + hamburger on mobile (phone number + links hidden).
- Multi-column sections (stats, buy/sell, cards) stack to 1 column < 768px.
- Buy/Sell overlapping card becomes stacked full-width.
- Neighborhoods 3-col → 1-col stack.
