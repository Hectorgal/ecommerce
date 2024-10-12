/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#075985",
          secondary: "#4b5563",
          accent: "#9d174d",
          neutral: "#272136",
          "base-100": "#ffffff",
          info: "#22d3ee",
          success: "#34d399",
          warning: "#ff8c00",
          error: "#ef4444",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};
