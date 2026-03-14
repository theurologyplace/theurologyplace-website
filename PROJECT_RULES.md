# The Urology Place Website Rules

## UI / Design
- Mobile-first responsive design
- Clean professional medical aesthetic
- White background with blue and slate accents
- Clear typography hierarchy
- Generous whitespace
- Rounded buttons
- Avoid excessive animation
- Maintain trust-oriented medical design

### Buttons (site-wide)
- **Primary:** `rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2` (adjust padding/text size as needed; keep rounded-xl, blue-600, and focus ring).
- **Secondary / outline:** `rounded-xl border-2 border-blue-600 bg-white text-blue-600 ... hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`.
- Use primary for main CTAs (e.g. Make Appointment, Submit); use secondary for alternate actions (e.g. Leave a review, social links).

## Navigation
- Desktop: horizontal nav with dropdown menus
- Mobile: hamburger menu with slide-out navigation
- Navigation should remain consistent across pages

## Code Quality
- Prefer reusable React components
- Avoid duplicated JSX and repeated nav definitions
- Keep Tailwind classes readable
- Maintain clear folder structure
- Keep logic simple and maintainable

## Performance
- Optimize images
- Avoid unnecessary client-side JS
- Use Next.js best practices for SEO