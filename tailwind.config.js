/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu'",
        poppins: "'Poppins'",
        lato: "'Lato'"
      },
      boxShadow: {
        'new': '2px 2px 37px rgba(73, 131, 194, 0.12)',
        'new2': '2px 2px 37px rgba(73, 131, 194, 0.12)',
        'icons': '3px 3px 36px rgba(85, 138, 196, 0.07)'
      },
      colors: {
        'new-color': '#200E32',
        'customGrey': '#80899A'
      },
      spacing: {
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '6vw': '6vw',
        '7vw': '7vw',
        '8vw': '8vw',
        '9vw': '9vw',
        '10vw': '10vw',
        '5vw': '5vw',
        '10vw': '10vw',
        '15vw': '15vw',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '35vw': '35vw',
        '40vw': '40vw',
        '45vw': '45vw',
        '50vw': '50vw',
        '55vw': '55vw',
        '60vw': '60vw',
        '65vw': '65vw',
        '70vw': '70vw',
        '75vw': '75vw',
        '80vw': '80vw',
        '85vw': '85vw',
        '90vw': '90vw',
        '95vw': '95vw',
        '100vw': '100vw',

        '1vh': '1vh',
        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '9vh': '9vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      }
    },
  },
  plugins: [],
}
