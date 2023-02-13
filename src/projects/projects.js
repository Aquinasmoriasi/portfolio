import {
  jets1, jets2, jets3, conf1, conf2, conf3, space1, space2, space3,
  todo1, todo2, flix1, flix2, cat1, cat2, cat3, leader1, coin1, coin2, coin3,
} from '../images/images ';

const projects = {
  jetlog: {
    shortname: 'jetlog',
    name: 'Jet Log',
    icon: 'bi-airplane-engines-fill',
    about: 'Aeroplane reservation app',
    images: [jets1, jets2, jets3],
    stack: ['Rails', 'React', 'JWT'],
    description:
      "This is a real world practical app for renting planes. When the user visits the app they can see all available planes and click on a specific plane to see more details. The user is also authenticated to reserve a plane and see their specific reservations. The app has additional authorization for the admin to add or delete a plane from the database. It's built alongside the jetlog back-end application (https://github.com/tkz96/jet-log-backend)",
    source: 'https://github.com/tkz96/jet-log-frontend',
    live: 'https://the-awesome-berkay-akbas-site.netlify.app/',
  },
  space: {
    shortname: 'space',
    name: "Space Travellers' Hub",
    icon: 'bi-rocket-takeoff-fill',
    about: 'Rockets and missions reservation app',
    images: [space1, space2, space3],
    stack: ['React', 'CSS', 'Redux', 'Jest'],
    description:
      'This app fetches rockets and missions from the SpaceX API and allows them to reserve rockets or their spots in one of the missions. The app is a single page application build using React and uses Redux to manage state.',
    source: 'https://github.com/Aquinasmoriasi/space-travelers-hub',
    live: 'https://aquinasmoriasi-makes-great-sites.netlify.app/',
  },
  todo: {
    shortname: 'todo',
    name: 'ToDo App',
    icon: 'bi-list-task',
    about: 'A todo list app',
    images: [todo1, todo2],
    stack: ['React', 'Bootstrap', 'CSS'],
    description: 'This is an app that allows users to add and remove tasks.',
    source: 'https://github.com/Aquinasmoriasi/todo-app',
    live: 'https://aquinasmoriasi.github.io/todo-app/',
  },
  microflix: {
    shortname: 'microflix',
    name: 'Microflix',
    icon: 'bi-film',
    about: 'App that shows a list of movies',
    images: [flix1, flix2],
    stack: ['JavaScript', 'CSS', 'Webpack', 'Jest'],
    description:
      'This is a project that helps you see the latest movies and highly rated movies all in one website. The movies are fetched from an database API and rendered on the DOM.',
    source: 'https://github.com/Aquinasmoriasi/microflix',
    live: 'https://aquinasmoriasi.github.io/microflix/',
  },
  coin: {
    shortname: 'coin',
    name: 'Coin Shark',
    icon: 'bi-currency-bitcoin',
    about: 'Live cryptocurrency details app',
    images: [coin1, coin2, coin3],
    stack: ['React', 'Redux', 'CSS'],
    description:
      'This application gives you a one-stop shop for the major information of the major cryptocurrency coins. The data is obtained in realtime from the CoinGecko API.',
    source: 'https://github.com/Aquinasmoriasi/coin-shark',
    live: 'https://coin-shark.netlify.app/',
  },
  catalogue: {
    shortname: 'catalogue',
    name: 'Catalogue of my things',
    icon: 'bi-collection-fill',
    about: 'CLI app to store a list of things',
    images: [cat1, cat2, cat3],
    stack: ['Ruby', 'RSpec', 'PostgreSQL'],
    description:
      'This is a Ruby built project that enables users to add their favourite items and save them for future reference using the command line.',
    source: 'https://github.com/Aquinasmoriasi/catalog-of-my-things',
    live: null,
  },
  conference: {
    shortname: 'conference',
    name: 'Conference Page',
    icon: 'bi-megaphone',
    about: 'Climate change conference page',
    images: [conf1, conf2, conf3],
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'This is a project for a climate change summit website. It contains details about the conference such as the speakers, the date, venue and the main speakers.',
    source: 'https://github.com/Aquinasmoriasi/conference-page',
    live: 'https://aquinasmoriasi.github.io/conference-page',
  },
  leaderboard: {
    shortname: 'leaderboard',
    name: 'Leaderboard',
    icon: 'bi-123',
    about: 'App to show game scores',
    images: [leader1],
    stack: ['Webpack', 'JavaScript', 'CSS'],
    description:
      'This is a leader board page that will display scores stored in an external API for a given game. Users can add new scores and view them on the page.',
    source: 'https://github.com/Aquinasmoriasi/leaderboard',
    live: 'https://aquinasmoriasi.github.io/leaderboard/',
  },
};

export default projects;
