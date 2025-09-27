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
        // 主色调 - 焦糖珊瑚色系
        primary: '#D97757',
        'primary-light': '#E59980',
        'primary-dark': '#B85A3D',

        // 基础色彩 - 现代简约主义暖色调
        background: '#FAF9F5',
        foreground: '#141413',
        'foreground-secondary': '#5E5D59',
        surface: '#FFFFFF',
        border: '#E8E6DC',

        // 其他颜色
        'border-light': '#E8E6DC',
      },
      fontFamily: {
        geist: ['var(--font-geist)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(217, 119, 87, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(217, 119, 87, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}