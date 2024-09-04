/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "dating.html",
    "./html/**/*.html",
    "./html/register.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2C7873",
        dark: "#0f172a",
        tosca: "#5b247a",
        blues: "#1bcedf",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "translate(-50%, -50%) rotateY(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotateY(360deg)" },
        },
      },
      animation: {
        "spin-slow": "rotate 20s linear infinite",
      },
      transitionTimingFunction: {
        "image-expo": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      backgroundImage: {
        'building1': "url('../img/streetlight.png')",
        'building2': "url('../img/streetlight.png')",
        'newspaper': "url('../img/newspaper.png')",
        'blood': "url('https://via.placeholder.com/1920x1080?text=Blood+Overlay')",
    },
    },
  },
  plugins: [],
};
