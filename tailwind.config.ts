import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1A2BFF",
          "blue-dark": "#0E1FCC",
          lime: "#D4F800",
          "lime-soft": "#E5FB3D",
          ink: "#0A0A0A",
          muted: "#6B7280",
          border: "#E5E7EB",
          surface: "#F7F8FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(10, 10, 10, 0.12)",
        "card-lg": "0 24px 60px -20px rgba(10, 10, 10, 0.25)",
      },
      backgroundImage: {
        "grid-blue":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        "lime-fade":
          "linear-gradient(180deg, #F4FFB0 0%, #ECFFB6 40%, #FFFFFF 100%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
