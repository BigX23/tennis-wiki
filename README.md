# 🎾 Tennis Wiki

A modern tennis wiki showcasing the top 5 ATP and WTA players with detailed individual player profiles. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and shadcn/ui. Features dark/light mode, responsive design, and rich player data including bios, career stats, Grand Slam titles, and playing styles.

## Features

- **Dark / Light Mode** — System-aware theme toggle powered by `next-themes`, with smooth switching via the navbar button
- **Responsive Design** — Fully responsive layout with mobile hamburger menu and adaptive grid layouts
- **Player Profiles with Tabs** — Each player page has three tabs: Bio (biography + playing style), Career Stats (titles, win-loss, Grand Slams), and Achievements (career highlights + Olympic medals)
- **Interactive Player Cards** — Hover-animated cards on listing pages showing ranking, flag, age, height, hand, and Grand Slam count
- **10 Player Profiles** — Comprehensive data for the top 5 ATP players (Sinner, Zverev, Alcaraz, Djokovic, Medvedev) and top 5 WTA players (Sabalenka, Świątek, Gauff, Paolini, Rybakina)
- **Static Generation** — All player pages are statically generated at build time via `generateStaticParams`
- **Tennis-Themed UI** — Custom green/gold color palette with gradient accents, trophy icons, and flag emojis
- **Standalone Output** — Configured for standalone deployment via `output: "standalone"`

## Getting Started

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/tennis-wiki.git
cd tennis-wiki

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

| Command | Description |
| --- | --- |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Navigating the Site

| Route | Page | Description |
| --- | --- | --- |
| `/` | **Home** | Hero section with links to ATP/WTA rankings, two feature cards, and aggregate stats (40 Grand Slams, 9 countries, 10 players, 2 tours) |
| `/men` | **Men's Top 5** | Grid of player cards for the top 5 ATP-ranked players |
| `/women` | **Women's Top 5** | Grid of player cards for the top 5 WTA-ranked players |
| `/players/[slug]` | **Player Profile** | Individual player page with quick stats, and tabbed sections for Bio, Career Stats, and Achievements |

Player slugs are kebab-case names (e.g., `/players/carlos-alcaraz`, `/players/iga-swiatek`).

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| [Next.js](https://nextjs.org/) | 15.1.0 | React framework with App Router and static generation |
| [React](https://react.dev/) | 19.0.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.2 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.16 | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com/) | — | UI component primitives (Badge, Button, Card, Tabs, Separator) |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Dark/light mode |
| [lucide-react](https://lucide.dev/) | 0.564.0 | Icons (Trophy, Medal, Star, Menu, ArrowLeft, etc.) |
| [class-variance-authority](https://cva.style/) | 0.7.1 | Component variant styling |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.4.1 | Merging Tailwind classes without conflicts |
| [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | 1.0.7 | Animation utilities |

## Project Structure

```
tennis-wiki/
├── public/                      # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind directives + CSS custom properties for light/dark themes
│   │   ├── layout.tsx           # Root layout: Inter font, ThemeProvider, Navbar, footer
│   │   ├── page.tsx             # Home page: hero section, ATP/WTA feature cards, stats strip
│   │   ├── men/
│   │   │   └── page.tsx         # Men's Top 5: renders PlayerCard grid for ATP players
│   │   ├── women/
│   │   │   └── page.tsx         # Women's Top 5: renders PlayerCard grid for WTA players
│   │   └── players/
│   │       └── [slug]/
│   │           └── page.tsx     # Dynamic player profile: quick stats, Bio/Stats/Achievements tabs
│   ├── components/
│   │   ├── navbar.tsx           # Sticky navbar with logo, nav links, theme toggle, mobile hamburger menu
│   │   ├── player-card.tsx      # Reusable card component showing player ranking, flag, stats, Grand Slams
│   │   ├── theme-provider.tsx   # Client wrapper around NextThemesProvider
│   │   ├── theme-toggle.tsx     # Sun/Moon toggle button for switching dark/light mode
│   │   └── ui/
│   │       ├── badge.tsx        # shadcn Badge with default/secondary/destructive/outline variants
│   │       ├── button.tsx       # shadcn Button with 6 variants and 4 sizes
│   │       ├── card.tsx         # shadcn Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
│   │       ├── separator.tsx    # shadcn Separator (horizontal/vertical divider)
│   │       └── tabs.tsx         # Custom Tabs implementation (Tabs, TabsList, TabsTrigger, TabsContent)
│   └── lib/
│       ├── players.ts           # Player data: TypeScript interface + arrays of 5 ATP & 5 WTA players with full bios, stats, and achievements
│       └── utils.ts             # cn() utility — merges clsx + tailwind-merge for conditional class names
├── .gitignore                   # Ignores node_modules, .next, out
├── next.config.ts               # Next.js config: standalone output mode
├── package.json                 # Dependencies, scripts (dev/build/start/lint)
├── postcss.config.mjs           # PostCSS plugins: Tailwind CSS + Autoprefixer
├── tailwind.config.ts           # Tailwind config: dark mode (class), shadcn color tokens, fade-in animation
└── tsconfig.json                # TypeScript config: path alias @/* → ./src/*, bundler module resolution
```
