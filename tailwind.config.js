/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
//npx tailwindcss -i ./resources/css/app.css -o ./public/css/tailwind/output.css --watch
//to use the tailwind, ling the css to the output file