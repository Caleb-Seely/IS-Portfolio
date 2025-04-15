/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
     "./public/**/*.html"
   ],
   darkMode: 'class', // Enables dark mode via a class, e.g. <html class="dark">
   theme: {
     extend: {
       colors: {
         background: {
           DEFAULT: '#121B14', // Deep forest green background
           soft: '#1E2B22', // Slightly lighter for cards or sections
         },
         forest: {
           DEFAULT: '#2C5F2D',
           light: '#4C8C4A',
           dark: '#1B3B1A',
         },
         sand: {
           DEFAULT: '#F5F1E3',
           darker: '#D9D4C5',
         },
         stone: {
           DEFAULT: '#A89F91',
           light: '#C4BFB3',
         },
         accent: {
           green: '#74C69D',
           tan: '#E9D8A6',
         },
         text: {
           base: '#E6E6E6',
           muted: '#B0B8B4',
         }
       },
       fontFamily: {
         sans: ['"Poppins"', 'sans-serif'], // clean, professional
         display: ['"DM Serif Display"', 'serif'], // for headings or creative flair
         hand: ['"Pacifico"', 'cursive'], // optional for personal touches
       },
     },
   },
   plugins: [],
 }
 