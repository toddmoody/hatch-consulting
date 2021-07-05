//tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          'brandOne-900': '#00003A',
          // 'brandOne-500': 'rgba(#00003A, 0.3)',
          'brandTwo-900': '#F26E21',
          // 'brandTwo-500': 'rgba(#F26E21, 0.7)',
          'brandThree-900': '#00B4D0',
          // 'brandThree-500': 'rgba(#00B4D0, 0.7)',
          'brandFour-900': '#19244A',
          // 'brandFour-500': 'rgba(#19244A, 0.7)'
        }   
      },
    }, 
    plugins: [
      require('@tailwindcss/forms'),
    ], 
  }
