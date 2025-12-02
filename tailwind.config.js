// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  // Yahan hum Tailwind ko bata rahe hain ke woh in files mein classes dhunde
  content: [
    "./index.html",
    // Agar aapke components src folder mein hain (jaisa ki aam taur par hota hai)
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}