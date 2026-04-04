# Cordovan Atelier – Handmade Leather Goods

A multi-page static website for **Cordovan Atelier**, a handcrafted leather goods brand based in Tiruchirappalli, Tamil Nadu. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks or build tools required.

---

## Project Structure

```
lather/
├── index.html                  ← Home page (entry point)
├── assets/
│   ├── css/
│   │   ├── style.css           ← Main stylesheet (all components)
│   │   ├── dark-mode.css       ← Dark theme variable overrides
│   │   └── rtl.css             ← Right-to-left layout support
│   ├── js/
│   │   ├── main.js             ← Shared JS (theme, mobile menu, password toggle)
│   │   └── plugins/            ← Third-party plugin scripts (if needed)
│   ├── images/                 ← Image assets
│   └── fonts/                  ← Self-hosted font files (if needed)
├── pages/
│   ├── services.html           ← Services & Craftsmanship
│   ├── shop.html               ← E-commerce / Product Listing
│   ├── about.html              ← Our Story
│   ├── contact.html            ← Contact & Enquiry Form
│   ├── pricing.html            ← Commission Packages
│   ├── login.html              ← Sign In
│   └── signup.html             ← Create Account
├── documentation/              ← Extended docs & guides
└── README.md                   ← This file
```

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, craft story, featured products, testimonials, CTA |
| Services | `pages/services.html` | Service cards + custom order process timeline |
| Shop | `pages/shop.html` | Product grid with sidebar filters |
| About | `pages/about.html` | Brand story + stats |
| Contact | `pages/contact.html` | Contact info + enquiry form |
| Pricing | `pages/pricing.html` | Commission package tiers |
| Login | `pages/login.html` | Sign-in form (no nav) |
| Sign Up | `pages/signup.html` | Registration form (no nav) |

---

## Features

- **Light / Dark Mode** — toggled via `toggleTheme()` in `main.js`. Theme choice is persisted in `localStorage` under the key `ca-theme`.
- **Responsive** — two breakpoints: `1024px` (tablet) and `768px` (mobile). Includes a hamburger drawer menu.
- **Zero dependencies** — no frameworks, no build step. Open `index.html` directly in any browser.
- **Password toggle** — eye icon on password fields using the shared `togglePwd(id)` utility.
- **Leather design system** — all colours, typography, and spacing defined as CSS custom properties in `:root` inside `style.css`.

---

## How Navigation Works

Each HTML page defines its own `showPage(id)` routing function that maps page IDs to relative file paths. This replaces the original single-page `display:none/block` approach with real multi-page navigation.

```js
// Example from pages/*.html
function showPage(id) {
  var map = {
    home: '../index.html',
    services: 'services.html',
    shop: 'shop.html',
    // ...
  };
  if (map[id]) location.href = map[id];
}
var sp = showPage; // alias used in mobile menu
```

---

## Getting Started

No installation required. Open `index.html` in your browser, or serve locally:

```bash
# Python (built-in)
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Customisation

- **Colours** — edit CSS custom properties in `assets/css/style.css` under `:root`.
- **Dark mode colours** — edit `assets/css/dark-mode.css`.
- **Fonts** — Google Fonts are loaded via CDN in each page's `<head>`. To self-host, download to `assets/fonts/` and update `@font-face` in `style.css`.
- **Adding a new page** — create `pages/newpage.html`, copy the nav/footer from an existing page, and add the new key to `showPage`'s map in every HTML file.

---

© 2025 Cordovan Atelier. Handcrafted in Tiruchirappalli, Tamil Nadu.
