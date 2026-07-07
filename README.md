# Alya Al Diqqi — Developer Portfolio

My personal portfolio website, built with **Next.js 14** and **Tailwind CSS**.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
app/                 # App router (layout, page, global styles)
components/           # UI sections (hero, about, skills, projects, etc.)
utils/data/          # Site content — edit these files to update the site
public/              # Static assets (photo, resume)
```

All text content lives in `utils/data/`, so the site can be updated without
touching the components.

## Deploy

Deployed easily on [Vercel](https://vercel.com/) — connect the repository and it
builds automatically. No environment variables are required.
