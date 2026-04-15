````markdown
# Portfolio Website

Personal portfolio website showcasing projects, skills, and professional background.

## Overview

This website serves as a personal portfolio to present selected projects, technical skills, and work experience. It is built as a responsive single-page application with expandable project cards and smooth navigation between sections.

The portfolio is intended for recruiters and collaborators who want a clear overview of experience, technical competence, and recent work.

## Features

* Responsive layout for desktop and mobile
* Project section with expandable cards for additional details
* Image galleries for projects
* Smooth scrolling navigation
* Sticky navigation bar
* Clean and minimal UI

## Tech Stack

* **Frontend:** React
* **Build tool:** Vite
* **Styling:** CSS (Flexbox-based layout)
* **Deployment:** Render (Static Site)

## Project Structure

```
project-root/
├─ public/
│  └─ images/
│     └─ projects/
├─ src/
│  ├─ components/
│  │  ├─ Card/
│  │  ├─ ExpandableCard/
│  │  ├─ NavBar/
│  │  └─ ...
│  ├─ pages/
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ vite.config.js
└─ package.json
```

## Getting Started

### Prerequisites

* Node.js (LTS recommended)
* npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```


## **Notes**

- Project contact details and email configuration are in `src/components/Contact/Contact.tsx`. -> make sure to add your own in .env-file:
    VITE_SERVICE_ID=
    VITE_TEMPLATE_ID=
    VITE_PUBLIC_KEY=


## Author

Anni Mustonen

## License

This project is intended for personal portfolio use. All rights reserved.
````
