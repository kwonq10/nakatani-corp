/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0c',
        gold: '#c8a951',
        paper: '#faf8f3',
        sumi: '#2a2820',
        softwhite: '#e8e6df',
        mute: '#9a9889',
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      },
    },
  },
}

export default config
