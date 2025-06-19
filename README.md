## chillz

# Project overview
✅ React Router Navigation:
4 different pages for 4 flavors, navigated via React Router.
Each flavor page has its own distinct theme and color gradient (dark-to-light).

✅ Thematic Backgrounds:
Dynamic backgrounds that start dark on the left and gradually become lighter towards the right.

✅ Interactive Navbar:
The Navbar background color changes based on the selected theme.
Responsive hamburger menu on smaller devices.
"Order Your Ice Cream" button styled with hover effects.

✅ Flavor Selector Icons:
4 clickable icons (Strawberry, Blueberry, Vanilla, Pistachio) at the bottom of each page to switch between themes easily.
Each icon housed in a transparent, rounded square with a scaling hover effect.

✅ Animations:
Smooth text transitions when changing flavors.
Hover effects for interactive elements like buttons and icons.

✅ Responsive Design:
Fully mobile-friendly using Tailwind's flex, gap, justify, and responsive utility classes.

# Tech Stack Used
React(vite-latest) + TailwindCss

# Folder Structure
/public
   ├── strawberry.png
   ├── blueberry.png
   ├── choco.png
   ├── pista.png
   └── strawberry_big.png
/src
   ├── App.jsx
   ├── main.jsx
   ├── index.css
   ├── components/
   │    └── Navbar.jsx
   └── pages/
        ├── Strawberry.jsx (Home)
        ├── Blueberry.jsx
        ├── Vanilla.jsx
        └── Pistachio.jsx

# How to Setup
1) Download the files.
2) Open the Treminal.
3) Run npm install
4) Run cd folder name
5) Run nmp run dev

# Issue
Didn't Provide Images, Hence I Used Screenshots with low Quality and Random Size which made my Ice Cream Icons at the bottom not
up to the mark, tried my best to make better but didn't achive perfect Icon. Remaining all the React Functional-Components, Hooks and Routing established perfectliy.

# Deployment
Deployed the app on Vercel.
