# 🚀 Santosh Solanki — Portfolio Website

A production-ready, SEO-optimized personal portfolio for a Frontend React.js Developer.
Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

---

## ✨ Features

- ⚡ **Next.js 14 App Router** — server components, file-based routing, optimized images
- 🎨 **Dark/Light mode** — system-aware, persisted via next-themes
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🔍 **SEO optimized** — OpenGraph, Twitter cards, JSON-LD structured data, canonical URLs
- 🎞️ **Framer Motion** animations — scroll-triggered, subtle, performant
- 🧩 **shadcn/ui components** — Button, Badge, Card, Separator
- 💌 **Contact form** — client-side validation, ready for EmailJS/Firebase
- 🏎️ **Lighthouse-ready** — font optimization, image priority, minimal JS

---

## 📁 Folder Structure

```
santosh-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky nav with mobile menu & theme toggle
│   │   ├── Footer.tsx        # Footer with social links
│   │   └── ThemeProvider.tsx # next-themes wrapper
│   ├── sections/
│   │   ├── Hero.tsx          # Hero with avatar, CTA, social links
│   │   ├── About.tsx         # About + stats grid
│   │   ├── Skills.tsx        # Categorized skill badges
│   │   ├── Projects.tsx      # 4 project cards with tech stack
│   │   └── Contact.tsx       # Contact form + contact info
│   ├── globals.css           # Tailwind base + CSS variables
│   ├── layout.tsx            # Root layout with metadata & SEO
│   └── page.tsx              # Main page composing all sections
├── components/
│   └── ui/
│       ├── button.tsx        # shadcn Button
│       ├── badge.tsx         # shadcn Badge
│       ├── card.tsx          # shadcn Card
│       └── separator.tsx     # shadcn Separator
├── lib/
│   ├── data.ts               # All portfolio data (profile, skills, projects)
│   └── utils.ts              # cn() utility
├── public/                   # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── components.json           # shadcn/ui config
```

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.17+ 
- npm / yarn / pnpm

### 1. Clone & Install

```bash
# Clone this repo
git clone https://github.com/Santosh7solanki/portfolio.git
cd santosh-portfolio

# Install dependencies
npm install
# or
yarn install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## ⚙️ Customization

### Update your information
Edit **`lib/data.ts`** — this is the single source of truth for:
- `profile` — name, role, tagline, social links, email, phone
- `skills` — all skill categories
- `projects` — project cards

### Update your photo
Replace the `avatar` URL in `lib/data.ts`:
```ts
avatar: "https://your-photo-url.com/photo.jpg",
// OR use a local file:
avatar: "/santosh_profile.png",  // place in /public/santosh_profile.png
```

---

## 💌 Contact Form Integration

The form currently simulates sending. To make it live, integrate one of these:

### Option A — EmailJS (Recommended, free)

```bash
npm install @emailjs/browser
```

In `Contact.tsx`, replace the simulation with:
```ts
import emailjs from "@emailjs/browser";

const result = await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { from_name: form.name, from_email: form.email, message: form.message },
  "YOUR_PUBLIC_KEY"
);
```

### Option B — Firebase Firestore

```bash
npm install firebase
```

```ts
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

await addDoc(collection(db, "contacts"), {
  ...form,
  createdAt: serverTimestamp(),
});
```

Create `lib/firebase.ts`:
```ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase config from console.firebase.google.com
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## 🚀 Deployment

### Vercel (Recommended — Free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — Vercel auto-detects Next.js and deploys on every push to `main`.

### Netlify

```bash
npm run build
# Deploy the /.next folder via Netlify CLI or dashboard
```

### Custom Domain

In your Vercel dashboard → Project → Settings → Domains → add `santoshsolanki.dev`.

Update the canonical URL in `app/layout.tsx`:
```ts
alternates: { canonical: "https://yourdomain.com" },
```

---

## 📊 SEO Checklist

- [x] `<title>` and `<meta description>` via Next.js Metadata API
- [x] OpenGraph tags (title, description, image)
- [x] Twitter Card tags
- [x] JSON-LD structured data (Person schema)
- [x] Canonical URL
- [x] robots meta (index, follow)
- [x] Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [x] `alt` text on all images
- [x] `aria-label` on icon-only buttons and links
- [ ] Add sitemap: install `next-sitemap` for auto-generation

---

## 🧱 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Animations | Framer Motion |
| Icons | Lucide React |
| Theming | next-themes |
| Font | Inter (Google Fonts) |

---

## 📄 License

MIT © Santosh Solanki
