# Vantera Creatives Portfolio Website

A responsive, editorial-style portfolio website for Vantera Creatives.

## Brand system

- Deep Navy: #0E1521
- Vantera Orange: #F26A38
- Slate Grey: #68717D
- Warm White: #F5F2EC
- Primary display typeface: MuseoModerno
- Secondary/body typeface: system sans / Inter-style fallback

## Files

- index.html — complete website structure/content
- styles.css — responsive visual system
- script.js — navigation, filtering, modal projects, scroll reveal and contact form
- assets/images/ — add your own portfolio images here

## Before publishing

1. Open `index.html`.
2. Replace `hello@vanteracreatives.com` with your real email.
3. Replace `254700000000` with your real WhatsApp number in international format.
4. Replace the Instagram `#` link with your real Instagram profile.
5. Replace the sample portfolio projects with your real work.
6. Replace the "JA" portrait placeholder with a professional photo if desired.
7. For the strongest portfolio, add real project images and case studies.

## Running locally

No build tools are required.

Double-click `index.html`, or use a local server such as VS Code Live Server.

## Deploying on Vercel

Option A:
- Put all files in a GitHub repository.
- In Vercel, choose "Add New Project".
- Import the repository.
- Framework preset: Other.
- Build command: leave empty.
- Output directory: leave empty / root.
- Deploy.

Option B:
- Use Vercel CLI from the project folder.

## Contact form

The included form uses a `mailto:` workflow, so it does not require a backend. The visitor's default email application opens with the enquiry already prepared.

For a true server-side form that works even when the visitor has no configured email client, connect the form to a provider such as Formspree, Web3Forms, Netlify Forms, or your own backend and replace the submit handler in `script.js`.

## Recommended next upgrade

Add individual case-study pages such as:
- `/projects/vantera-brand-identity.html`
- `/projects/restaurant-campaign.html`
- `/projects/real-estate-visuals.html`
- `/projects/editorial-stories.html`

Keep the same design system across every page.
