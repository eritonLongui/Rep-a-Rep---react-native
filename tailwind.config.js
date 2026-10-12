/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#121318",
          2: "#20222A",
          3: "#2C2F3A",
        },
        paper: {
          DEFAULT: "#F7F7F9",
          card: "#FFFFFF",
          muted: "#F0F1F5",
        },
        brand: {
          blue: "#3759F9",
          "blue-dark": "#2543D8",
          purple: "#7B4DF7",
          "purple-dark": "#6335DE",
          "violet-soft": "#EEE9FF",
        },
        muted: {
          DEFAULT: "#6F7280",
          light: "#9CA3AF",
          dark: "#4B5563",
        },
        line: {
          DEFAULT: "#E6E7EC",
          dark: "#2A2D37",
        },
        success: {
          DEFAULT: "#20A575",
          soft: "#E8F8F2",
        },
        danger: {
          DEFAULT: "#DC4D58",
          soft: "#FDECEE",
        },
      },
      fontFamily: {
        sans: ["Manrope_400Regular"],
        medium: ["Manrope_500Medium"],
        semibold: ["Manrope_600SemiBold"],
        bold: ["Manrope_700Bold"],
        extrabold: ["Manrope_800ExtraBold"],
      },
      letterSpacing: {
        eyebrow: "1.3px",
      },
    },
  },
  plugins: [],
};
