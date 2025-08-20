import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * 
 * This configuration centralizes all theme colors for the mini app.
 * To change the app's color scheme, simply update the 'primary' color value below.
 * 
 * Example theme changes:
 * - Blue theme: primary: "#3182CE"
 * - Green theme: primary: "#059669" 
 * - Red theme: primary: "#DC2626"
 * - Orange theme: primary: "#EA580C"
 */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		  colors: {
  		    border: "oklch(var(--border))",
  		    input: "oklch(var(--input))",
  		    ring: "oklch(var(--ring))",
  		    background: "oklch(var(--background))",
  		    foreground: "oklch(var(--foreground))",
  		    primary: {
  		      DEFAULT: "oklch(var(--primary))",
  		      foreground: "oklch(var(--primary-foreground))",
  		    },
  		    secondary: {
  		      DEFAULT: "oklch(var(--secondary))",
  		      foreground: "oklch(var(--secondary-foreground))",
  		    },
  		    destructive: {
  		      DEFAULT: "oklch(var(--destructive))",
  		      foreground: "oklch(var(--destructive-foreground))",
  		    },
  		    muted: {
  		      DEFAULT: "oklch(var(--muted))",
  		      foreground: "oklch(var(--muted-foreground))",
  		    },
  		    accent: {
  		      DEFAULT: "oklch(var(--accent))",
  		      foreground: "oklch(var(--accent-foreground))",
  		    },
  		    popover: {
  		      DEFAULT: "oklch(var(--popover))",
  		      foreground: "oklch(var(--popover-foreground))",
  		    },
  		    card: {
  		      DEFAULT: "oklch(var(--card))",
  		      foreground: "oklch(var(--card-foreground))",
  		    },
  		  },
  		borderRadius: {
			xl: 'calc(var(--radius) + 4px)',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  		},
  	},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
