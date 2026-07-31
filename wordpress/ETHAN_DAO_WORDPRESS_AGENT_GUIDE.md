# Ethan Dao WordPress Theme Agent Guide

This project now ships the Ethan Dao WordPress implementation as the source of truth.

## Source Paths

- Repository theme: `wordpress/wp-content/themes/ethan-dao-vanilla`
- Repository must-use plugins: `wordpress/wp-content/mu-plugins`
- Local development install: `C:\Users\Asus\Local Sites\ethandao\app\public`
- Local active theme: `C:\Users\Asus\Local Sites\ethandao\app\public\wp-content\themes\ethan-dao-vanilla`

When working locally, edit the active Local Sites theme first if the user is checking `http://ethandao.local/`. Before committing, mirror the local theme back into the repository path:

```powershell
robocopy "C:\Users\Asus\Local Sites\ethandao\app\public\wp-content\themes\ethan-dao-vanilla" "C:\CongViec\TungDaov2\ai-website-cloner-template\wordpress\wp-content\themes\ethan-dao-vanilla" /MIR
```

Do not commit Local Sites core WordPress files, uploads, database files, cache folders, or screenshots unless explicitly requested.

## Theme Structure

- `functions.php`: registers menus, bootstraps page templates, creates default pages and menu items, renders shared nav/footer/drawer helpers.
- `templates/*.php`: full-page custom page templates. These are currently self-contained HTML/PHP templates and load `styles.css` directly.
- `styles.css`: main visual system. The bottom block named `Ethan Dao Theme Tokens` is the canonical design control layer.
- `script.js`: menu/drawer behavior, form success states, property filtering, carousel/map interactions, social rendering, and reveal behaviors.
- `assets/images`: local images used by the theme.
- `style.css`: WordPress theme metadata file.
- `front-page.php` and `index.php`: WordPress entry files that delegate into templates.

## Design Tokens

Edit this block in `styles.css` first:

```css
/* Ethan Dao Theme Tokens */
:root {
  --site-container: 1200px;
  --color-bg: #fff;
  --color-ink: #0a0a0a;
  --color-muted: #6b6b6b;
  --title-hero: clamp(4.2rem, 8vw, 6rem);
  --title-page: clamp(3.4rem, 8vw, 6rem);
  --title-section: clamp(2.6rem, 5.6vw, 5.2rem);
}
```

Use these variables for future changes instead of adding one-off sizes or colors. This keeps the home page and subpages balanced.

Important token groups:

- Container: `--site-container`, `--site-gutter`, `--site-gutter-wide`
- Colors: `--color-bg`, `--color-surface`, `--color-ink`, `--color-muted`, `--color-line`, `--color-dark`, `--color-sale`
- Typography: `--font-sans`, `--font-display`, `--font-script`, `--title-hero`, `--title-page`, `--title-section`, `--title-panel`, `--title-card`
- Spacing: `--space-section`, `--space-section-mobile`, `--space-hero-top`, `--space-hero-bottom`, `--space-grid`, `--space-split`
- Header: `--header-height`, `--header-logo-size`, `--header-menu-height`

## Navigation Rules

Do not hardcode primary nav links in page templates.

The header uses:

```php
<?php echo ethan_dao_vanilla_render_primary_nav(); ?>
```

The drawer and footer use:

```php
<?php echo ethan_dao_vanilla_render_drawer_nav(); ?>
<?php echo ethan_dao_vanilla_render_footer_nav(); ?>
```

Menu content comes from WordPress menu locations registered in `functions.php`: `primary`, `drawer`, and `footer`.

## Language And Content

The theme should be Vietnamese-first. Avoid mixed AI-style prose such as English sentences with isolated Vietnamese words. If English is needed for names, brands, brokerage, or legal terms, keep it natural.

Core Ethan Dao facts currently used:

- Public name: Ethan Dao
- Legal/alternate name: Tung Dao
- Brokerage/team: eXp Realty, Texas Ace Team
- Phone: `(469) 989-5786`
- Email: `ethandao.realtor@gmail.com`
- Market: Dallas-Fort Worth, including Dallas, Fort Worth, Arlington, McKinney, Lavon, and Garland
- Social profiles are rendered in `script.js`

## CSS Cache Version

Every template links `styles.css` with a query version. After CSS changes, bump this version in all `templates/*.php` files, for example:

```html
styles.css?ver=1.0.13
```

This prevents WordPress/browser cache from showing an old design.

## Local QA Checklist

Run these before committing:

```powershell
$theme = "C:\Users\Asus\Local Sites\ethandao\app\public\wp-content\themes\ethan-dao-vanilla"
Get-ChildItem "$theme\templates" -Filter "*.php" | ForEach-Object { php -l $_.FullName }
```

Check key pages:

- `http://ethandao.local/`
- `http://ethandao.local/about/`
- `http://ethandao.local/buy/`
- `http://ethandao.local/sell/`
- `http://ethandao.local/properties/`
- `http://ethandao.local/contact/`

Visual checks:

- Header stays within the 1200px container.
- Desktop nav appears only when there is enough width.
- Mobile uses the Menu button and drawer.
- No yellow/gold is dominant unless the user asks for it again.
- Titles use shared token sizes and do not feel randomly too large or too small.
- Forms show local success text on submit.
- Social icon rail stays fixed and centered.

## Git Rules

Stage WordPress source files only for WordPress theme changes:

```powershell
git add wordpress/wp-content/themes/ethan-dao-vanilla wordpress/wp-content/mu-plugins wordpress/ETHAN_DAO_WORDPRESS_AGENT_GUIDE.md
```

Do not stage unrelated files such as `static-vanilla/desktop.png`, `static-vanilla/mobile.png`, or unrelated changes in `static-vanilla` unless the user explicitly asks.

