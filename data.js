const apps = [
  {
    id: 1,
    name: "Dashboard",
    icon: "./img/dashboard-icon.png",
    url: "https://dashboard-react-basic.netlify.app",
  },
  {
    id: 2,
    name: "eCommerce-Butchery",
    icon: "./img/ecommerce-butchery-icon.png",
    url: "https://ecommerce-contentful.netlify.app/",
  },
  {
    id: 3,
    name: "Online-CV",
    icon: "./img/online-cv-icon.png",
    url: "https://seandylanpatterson-cv.netlify.app/",
  },
  {
    id: 4,
    name: "Pro-CV-Maker",
    icon: "./img/pro-cv-maker-icon.png",
    url: "https://procvmaker.netlify.app/",
  },
  {
    id: 5,
    name: "Portfolio",
    icon: "./img/portfolio-icon.png",
    url: "https://www.seanp.tk",
  },
  {
    id: 6,
    name: "Grouchy-Gorillas",
    icon: "./img/grouchy-gorillas-icon.png",
    url: "https://grouchygorillas.netlify.app/",
  },
  {
    id: 7,
    name: "Music-Player",
    icon: "./img/music-player-icon.png",
    url: "https://music-player-basic.netlify.app/",
  },
  {
    id: 8,
    name: "Random-Quote-Generator",
    icon: "./img/random-quote-generator-icon.png",
    url: "https://random-quotes-basic.netlify.app/",
  },
  {
    id: 9,
    name: "JavaScript-Calculator",
    icon: "./img/javascript-calculator-icon.png",
    url: "https://javascript-calculator-basic.netlify.app/",
  },
  {
    id: 10,
    name: "Markdown-Previewer",
    icon: "./img/markdown-previewer-icon.png",
    url: "https://mardown-previewer-basic.netlify.app/",
  },
  {
    id: 11,
    name: "Drum-Machine",
    icon: "./img/drum-machine-icon.png",
    url: "https://drum-machine-basic.netlify.app/",
  },
  {
    id: 12,
    name: "Login-Signup",
    icon: "./img/login-signup-icon.png",
    url: "https://login-signup-basic.netlify.app/",
  },
  {
    id: 13,
    name: "Budget-Buddy",
    icon: "./img/budget-buddy-icon.png",
    url: "https://budgetbuddy-basic.netlify.app/",
  },
  {
    id: 14,
    name: "Color-Flipper",
    icon: "./img/color-flipper-icon.png",
    url: "https://color-flipper-basic.netlify.app/",
  },
  {
    id: 15,
    name: "Counter",
    icon: "./img/counter-icon.png",
    url: "https://js-counter-basic.netlify.app/",
  },
  {
    id: 16,
    name: "Reviews",
    icon: "./img/reviews-icon.png",
    url: "https://reviews-basic.netlify.app/",
  },
  {
    id: 17,
    name: "Navbar",
    icon: "./img/navbar-icon.png",
    url: "https://navbar-basic.netlify.app/",
  },
  {
    id: 18,
    name: "Sidebar",
    icon: "./img/sidebar-icon.png",
    url: "https://sidebar-basic.netlify.app/",
  },
  {
    id: 19,
    name: "Modal",
    icon: "./img/modal-icon.png",
    url: "https://modal-basic.netlify.app/",
  },
  {
    id: 20,
    name: "FAQs",
    icon: "./img/faqs-icon.png",
    url: "https://faq-basic.netlify.app/",
  },
  {
    id: 21,
    name: "Menu",
    icon: "./img/menu-icon.png",
    url: "https://js-menu-basic.netlify.app/",
  },
  {
    id: 22,
    name: "Video",
    icon: "./img/video-icon.png",
    url: "https://video-basic.netlify.app/",
  },
  {
    id: 23,
    name: "Scroll",
    icon: "./img/scroll-icon.png",
    url: "https://scroll-basic.netlify.app/",
  },
  {
    id: 24,
    name: "Tabs",
    icon: "./img/tabs-icon.png",
    url: "https://tabs-basic.netlify.app/",
  },
  {
    id: 25,
    name: "Countdown-Timer",
    icon: "./img/countdown-timer-icon.png",
    url: "https://countdown-timer-basic.netlify.app/",
  },
  {
    id: 26,
    name: "Lorem-Ipsum",
    icon: "./img/lorem-ipsum-icon.png",
    url: "https://lorem-ipsum-basic.netlify.app/",
  },
  {
    id: 27,
    name: "Grocery-List",
    icon: "./img/grocery-list-icon.png",
    url: "https://grocery-list-basic.netlify.app/",
  },
  {
    id: 28,
    name: "Carousel-Slider",
    icon: "./img/carousel-slider-icon.png",
    url: "https://carousel-slider-basic.netlify.app/",
  },
  {
    id: 29,
    name: "TicTacToe",
    icon: "./img/tictactoe-icon.png",
    url: "https://tictactoe-basic-sean.netlify.app/",
  },
  {
    id: 30,
    name: "Doodle-Jump",
    icon: "./img/doodle-jump-icon.png",
    url: "https://doodlejump-basic.netlify.app/",
  },
  {
    id: 31,
    name: "Flappy-Bird",
    icon: "./img/flappy-bird-icon.png",
    url: "https://flappybird-basic.netlify.app/",
  },
  {
    id: 32,
    name: "Squid-Game",
    icon: "./img/squid-game-icon.png",
    url: "https://squidgame-basic.netlify.app/",
  },
  {
    id: 33,
    name: "Memory-Game",
    icon: "./img/memory-game-icon.png",
    url: "https://memorygame-basic.netlify.app/",
  },
  {
    id: 34,
    name: "Tetris",
    icon: "./img/tetris-icon.png",
    url: "https://tetris-basic.netlify.app/",
  },
  {
    id: 35,
    name: "Rock-Paper-Scissors",
    icon: "./img/rock-paper-scissors-icon.png",
    url: "https://rockpaperscissors-basic.netlify.app/",
  },
  {
    id: 36,
    name: "Snake",
    icon: "./img/snake-icon.png",
    url: "https://snake-basic.netlify.app/",
  },
  {
    id: 37,
    name: "Asteroids",
    icon: "./img/asteroids.png",
    url: "https://asteroids-basic.netlify.app/",
  },
  {
    id: 38,
    name: "Blackjack",
    icon: "./img/blackjack-icon.png",
    url: "https://basic-blackjack.netlify.app/",
  },
  {
    id: 39,
    name: "Blackjack-Counter",
    icon: "./img/blackjack-counter-icon.png",
    url: "https://blackjackcounter-basic.netlify.app/",
  },
  {
    id: 40,
    name: "Passenger-Counter",
    icon: "./img/passenger-counter-icon.png",
    url: "https://passengercounter-basic.netlify.app/",
  },
  {
    id: 41,
    name: "Basic-Calculator",
    icon: "./img/basic-calculator.png",
    url: "https://basiccalculator-basic.netlify.app/",
  }
]