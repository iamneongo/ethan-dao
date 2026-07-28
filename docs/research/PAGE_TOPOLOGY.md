# Helena Luxury Homes — Page Topology

Platform: Luxury Presence. Font: **Montserrat**. Body scroll on `<body>` (overflow-y auto), no Lenis.
Page height ~13017px @ 1440. Fixed nav overlays everything.

## Global overlays
- **Nav** (fixed top): transparent over hero (white text/logo, white hamburger) → **solid white bg, black text, gold circular hamburger** after scrolling past hero. Height ~150px→~110px.
- **Side menu drawer** (`.sidemenu`) opens from hamburger.
- **"LET'S CONNECT" floating pill** — fixed bottom-left, white rounded pill with chevron.
- **Accessibility widget** bottom-right (skip in clone).

## Sections (top→bottom)
| # | Name | BG | Content |
|---|------|----|---------|
| 0 | Hero | video (dark) | Big HELENA H-logo mark, "HELENA" wordmark, tagline "Nationwide Top 1% Real Estate Agent since 2017", BUY/RENT toggle + search bar |
| 1 | Stats band | dark #4d4d4d | 4 stats: 9 YEARS/OF EXPERIENCE, +350/CLOSED SALES, +100M/ANNUAL SALES, $2.5M/AVERAGE PRICE |
| 2 | About / Top 1% Nationwide Realtor | white | Left: Helena photo; Right: label none, H2 "TOP 1% NATIONWIDE REALTOR", bio paragraph, LEARN MORE outline btn |
| 3 | Press logo strip | white | 7 logos: Robb Report, WSJ, The Wall Street Journal, Unique Homes, Barron's, + more (grayscale) |
| 4 | Listings & Sales map | dark #4d4d4d | H2 "LISTINGS & SALES" + Google Map w/ markers (use static map img) |
| 5 | Testimonial video band | (light) | Aerial video bg + centered quote "Working with Helena is a seamless and rewarding real estate…" |
| 6 | Buy with Confidence | white/image | White card (left) overlapping architectural image (right). Label "FOR BUYERS" gold italic, H2, para, BUYER'S GUIDE + BUYER PRESENTATION outline btns |
| 7 | Sell with Strategy | white/image | Mirror of #6 (image left, card right). "FOR SELLERS", SELLER'S GUIDE + SELLER PRESENTATION |
| 8 | Testimonials carousel | white | H2 "WHAT OUR CLIENTS ARE SAYING ABOUT US" + prev/next circle btns, Google review cards (avatar, name, stars, text, More, G logo) |
| 9 | Beyond Real Estate | dark #4d4d4d | 3 media cards: DOMINATE 2025, POWER HALF HOUR - Motivation/Skills, REALTOR INVESTOR SUCCESS PODCAST (img + title + desc) |
| 10 | Property video cards | dark #4d4d4d | 3 cards w/ play button overlay + title + address (Ralph Anderson / 36 Acres Riverfront / Above Lake WA) |
| 11 | Featured Properties carousel | white | H2 + property cards (image, price overlay, address, beds/baths/sqft), gold prev/next + gold VIEW ALL |
| 12 | Available listings $800K+ | dark #4d4d4d | H2 + grid of 12 property cards: FOR SALE gold badge + MLS# badge, image, price, address, beds/baths/sqft |
| 13 | Browse CTA | dark #4d4d4d | White outline BROWSE PROPERTIES button, centered |
| 14 | Home Valuation | image bg (estate aerial, dark overlay) | H2 "HOW MUCH IS YOUR WASHINGTON HOME WORTH?", 3 gold checkmarks (Instant property valuation, Expert advice, Sell for more), address input + gold GET A FREE HOME VALUATION btn (multi-step form) |
| 15 | Featured Neighborhoods | dark #4d4d4d | H2 + 3 full-height image cards MEDINA / CLYDE HILL / BELLEVUE (name overlay) + white VIEW ALL |
| 16 | Newsletter | white | H2 "WHERE EXPERTISE MEETS EXCELLENCE" + subcopy + NAME/EMAIL inputs + gold SUBMIT + consent checkbox |
| 17 | Work With Helena CTA | image bg (kitchen, overlay) | Centered white H2 + para + white LET'S CONNECT btn |
| 18 | Footer | white | HELENA logo, contact, address, nav links, gold social icons, IDX disclaimer, Luxury Presence credit |

## Interaction models
- Nav: scroll-driven transparent→solid transition.
- Sections 8, 11: click-driven carousels (prev/next).
- Section 14: multi-step click form (address → valuation states).
- Section 0: BUY/RENT click toggle.
- Cards: hover scale/overlay.
- Most content sections: static, with fade-up on scroll into view (subtle).
