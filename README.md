# Next-Gen Student Dashboard

A modern student learning dashboard built using **Next.js App Router**, **Supabase**, **Tailwind CSS**, and **Framer Motion**.

This project was developed as part of a frontend internship assignment focused on:
- Server Components
- Smooth UI animations
- Bento Grid layouts
- Responsive design
- Real-time database integration

---

# Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Lucide React Icons

---

# Features

- Modern dark-mode dashboard UI
- Bento Grid layout
- Dynamic course cards fetched from Supabase
- Server-side data fetching using Next.js Server Components
- Animated progress bars
- Framer Motion hover and stagger animations
- Dynamic icon rendering from database values
- Loading skeletons using `loading.tsx`
- Error handling using `error.tsx`
- Responsive sidebar / mobile navigation
- Modular component architecture

---

# Project Structure

```bash
app/
components/
  dashboard/
lib/
  supabase/
types/
```

---

# Database Schema

## courses

| Column | Type |
|---|---|
| id | uuid |
| title | text |
| progress | integer |
| icon_name | text |
| created_at | timestamp |

---

# Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# Architecture Decisions

## Server Components

Course data is fetched inside a Server Component using Supabase to improve:
- performance
- security
- initial page loading

## Component Modularity

The UI is split into reusable components:
- Sidebar
- HeroTile
- CourseCard
- ActivityTile
- DashboardContent

This keeps the project maintainable and scalable.

## Framer Motion

Framer Motion is used for:
- staggered page animations
- hover interactions
- animated progress bars
- layout transitions

Animations are implemented using transforms and opacity to avoid layout shifts.

---

# Deployment

This project is deployed using Vercel.

---

# Author

Sameer Raj