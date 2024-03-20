/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // 해당 파일 형식들에 적용된 tailwind  class만 번들링 대상이되어 css파일
  theme: {
    extend: {},
  },
  plugins: [],
};
