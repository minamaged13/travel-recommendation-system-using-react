/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        "stromi":{
          100:"#3B7179",
          200:"#4A8DB7",
          300:"#74BDE0",
          400:"#A1E1FA"
        }
      }
    },
    
  },
  plugins: [],
}