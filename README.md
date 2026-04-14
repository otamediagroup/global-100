# The Global 100 - Sustainable Leadership Index

A Next.js 14 App Router project ranking 50 global leaders from the Corporate Knights Global 100 sustainable companies list.

## Project Overview

**The Global 100** is OTA Media's expansion of The Fifty to a global scale. It benchmarks 50 international executives from the world's most sustainable corporations using the OTA Power Score methodology across five key dimensions.

## Live Sites

- **Global 100**: global-100.otamediagroup.com
- **The Fifty**: fifty.otamediagroup.com (cross-linked)
- **Leadership Index**: index.otamediagroup.com (CTA links)

## Key Features

### Homepage
- Hero section with branding and value proposition
- Stats bar: 50 Leaders | 18 Countries | 8 Sectors | 2026
- Full-text search across names, companies, and roles
- Multi-filter capability: Country, Sector, Tier
- Grid/list view toggle
- Leaders organized by tier: Vanguard (1-20) and Momentum (21-50)

### Leader Profiles
- Dynamic routes for all 50 leaders
- Full profile with role, company, country, sector
- 5-dimension scoring visualization
- Previous/next navigation
- SEO metadata per leader
- Dynamic OG image generation

### Methodology Page
- Detailed explanation of 5 scoring dimensions
- Tier hierarchy definitions
- Sector breakdown
- Key metrics and statistics

## Data Structure

### 50 Leaders Across
- **18 Countries**: Italy, Denmark, Portugal, USA, Taiwan, Brazil, Japan, China/Hong Kong, Germany, France, Netherlands, Belgium, Spain, Finland, Canada, India, South Korea, Switzerland, Norway
- **8 Sectors**: Renewable Energy, Technology, Financial Services, Industrial, Consumer, Healthcare & Pharma, Infrastructure & Logistics, Materials & Resources

### Scoring Dimensions (5 dimensions, 0-25 each)
1. **Sustainability** - Environmental and social impact
2. **Governance** - Corporate governance and transparency
3. **Innovation** - Clean tech and process innovation
4. **Growth** - Revenue growth and market expansion
5. **Resilience** - Supply chain and operational stability

Total score range: 0-125 (Leader 1: 95, Leader 50: 46)

## Technical Stack

- **Framework**: Next.js 14.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Fonts**: Inter (Google Fonts)
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel

## Design

### Brand Colors
- Navy: `#1A2332`
- Dark: `#0F1720`
- Gold: `#C9A84C`
- Teal: `#056773`

### Theme
Dark luxury aesthetic with gradient backgrounds, smooth animations, and responsive mobile-first design.

## File Structure

```
global-100/
├── Configuration
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── postcss.config.js
│   └── .gitignore
│
├── src/
│   ├── app/
│   │   ├── layout.tsx (root with nav/footer)
│   │   ├── page.tsx (homepage)
│   │   ├── globals.css
│   │   ├── leader/[slug]/page.tsx (dynamic profiles)
│   │   ├── methodology/page.tsx
│   │   └── api/og/route.tsx (OG images)
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── LeaderCard.tsx
│   │   ├── SearchFilter.tsx
│   │   ├── ScoreBar.tsx
│   │   └── LazyImage.tsx
│   │
│   └── data/
│       └── leaders.ts (50 leaders with full profiles)
│
└── public/
    └── leaders/ (add leader headshots here)
```

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage with rankings |
| `/methodology` | Static | Scoring methodology |
| `/leader/[slug]` | Dynamic | Individual leader profile (50 routes) |
| `/api/og` | API | Dynamic OG image generation |

## Development

### Setup
```bash
# DO NOT RUN - Vercel handles everything
# npm install    # ← Skip this
# npm run build  # ← Skip this
```

### View Locally (optional, for testing)
```bash
npm install
npm run dev
```

Vercel will automatically:
1. Detect Next.js 14 App Router project
2. Install dependencies
3. Build and optimize
4. Deploy to production

## Deployment

No local setup required. Simply push to GitHub and Vercel handles the rest.

### Next Steps for Edwin

1. **Images**: Add leader headshots to `public/leaders/` directory
2. **Push**: Commit and push to GitHub
3. **Vercel**: Auto-deploys on push
4. **Domain**: Update DNS or Vercel project settings
5. **Verify**: Test all features and cross-links

## Features

✓ Full-text search
✓ Multi-dimensional filtering
✓ Grid and list view modes
✓ Mobile-responsive design
✓ Dynamic OG images
✓ SEO optimization
✓ Lazy-loaded images
✓ Smooth animations
✓ Accessible navigation
✓ Server and client components
✓ Type-safe with TypeScript
✓ Static page generation

## Performance

- Pre-rendered leader pages (generateStaticParams)
- Optimized images via Next.js Image
- Lazy-loaded components
- Mobile-optimized view modes
- Efficient filtering with client-side React state

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance

## Documentation

- `README.md` - This file
- `PROJECT_SUMMARY.txt` - Project overview
- `DEPLOYMENT_CHECKLIST.md` - Status and next steps
- `FILE_STRUCTURE.txt` - File tree with annotations

## Support

All 50 leaders are complete with:
- Unique, factual bios (1-2 sentences)
- Real company and role information
- Proper scoring across 5 dimensions
- Appropriate sector classification
- Geographic distribution across 18 countries

Ready for production deployment.
