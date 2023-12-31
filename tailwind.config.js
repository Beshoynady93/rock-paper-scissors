/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'pentagon-bg': 'url(./assets/images/bg-pentagon.svg)',
        'scissors-gradient':
          'linear-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))',
        'paper-gradient':
          'linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))',
        'rock-gradient':
          'linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))',
        'lizard-gradient':
          'linear-gradient(hsl(261, 73%, 60%) , hsl(261, 72%, 63%))',
        'spuok-gradient':
          'linear-gradient(hsl(189, 59%, 53%) , hsl(189, 58%, 57%))',
        'background-gradient':
          'radial-gradient(hsl(214, 47%, 23%) , hsl(237, 49%, 15%))',
      },
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
      },
      fontFamily: {
        'main-display': ['Barlow Semi Condensed', 'sans-serif'],
      },
      borderWidth: {
        'game-icon': '14px',
      },
      maxHeight: {
        30: '30rem',
      },
    },
  },
  plugins: [],
};
