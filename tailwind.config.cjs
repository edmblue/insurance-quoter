/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.jsx',
  ] /* Los dos asteriscos significan "todos los archivos que esten en src y luego todos los que tengan .jsx" */,
  theme: {
    extend: {},
  },
  plugins: [],
};
