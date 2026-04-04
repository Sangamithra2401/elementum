# Elementum – React Landing Page

A pixel-faithful React implementation of the Elementum Figma design.

## Tech Stack
- React 18
- CSS Modules (per-component)
- Nginx (production server)
- Docker + Docker Compose

## Run with Docker (recommended)

```bash
docker-compose up --build
```

Then open http://localhost:3000

## Run locally (dev mode)

```bash
npm install
npm start
```

Open http://localhost:3000

## Build for production

```bash
npm run build
```

## Project Structure

```
src/
  components/
    Navbar.js / Navbar.css
    Hero.js / Hero.css
    Tomorrow.js / Tomorrow.css
    Offer.js / Offer.css
    Testimonial.js / Testimonial.css
    Newsletter.js / Newsletter.css
    Footer.js / Footer.css
  App.js / App.css
  index.js / index.css
public/
  index.html
Dockerfile
docker-compose.yml
nginx.conf
```

## Sections Implemented
1. **Navbar** – sticky, responsive with hamburger menu
2. **Hero** – large headline, avatar cluster, floating name badges
3. **Tomorrow** – two-column card + progress row
4. **What We Can Offer** – service list with hover states
5. **Testimonial** – centered quote card with side avatars
6. **Newsletter** – mint background subscribe section
7. **Footer** – four-column grid with links
