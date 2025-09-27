/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 使用CSS变量定义的颜色
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        "foreground-tertiary": "var(--foreground-tertiary)",
        surface: "var(--surface)",
        "surface-dark": "var(--surface-dark)",
        border: "var(--border)",
        "border-light": "var(--border-light)",
        "border-dark": "var(--border-dark)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "primary-subtle": "var(--primary-subtle)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-dark": "var(--accent-dark)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        serif: ["var(--font-heading)"],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'primary': '0 0 20px rgba(217, 119, 87, 0.15)',
      },
    },
  },
  plugins: [],
}