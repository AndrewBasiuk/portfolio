export interface Work {
  imageUrl: string;
  text: string;
  link?: string;
  outer?: boolean;
  additional?: string;
}

export const WORKS_LIST: Work[] = [
  {
    imageUrl: './assets/images/portfolio-images/works/mgid.jpg',
    text: 'Angular 9+, Angular Material',
    link: 'https://www.mgid.com/',
    outer: true,
  },
  {
    imageUrl: './assets/images/portfolio-images/works/cheatsheets.jpg',
    text: 'Angular 11, Firebase, Akita, Figma',
    link: 'https://cheatsheet-71389.web.app/',
    outer: true,
    additional: 'additional.cheatsheets'
  },
  {
    imageUrl: './assets/images/portfolio-images/works/mgid-land.jpg',
    text: 'HTML5, CSS3, JS, jQuery, SCSS',
    link: 'https://www.mgid.com/partnerships/AdFlex/',
    outer: true,
  },
  {
    imageUrl: './assets/images/portfolio-images/works/portfolio.jpg',
    text: 'Angular 9+, Angular Material',
    additional: 'additional.portfolio'
  },
  {
    imageUrl: './assets/images/portfolio-images/works/weather-app.jpg',
    text: 'Vue JS',
    link: 'https://andrewbasiuk.github.io/#/weather',
    outer: true,
  },
  {
    imageUrl: './assets/images/portfolio-images/works/smartorange.jpg',
    text: 'HTML5, CSS3, JS, jQuery',
    link: 'https://smarto.agency/',
    outer: true,
  },
  {
    imageUrl: './assets/images/portfolio-images/works/sandler.jpg',
    text: 'HTML5, CSS3, JS, jQuery, SCSS',
    link: 'http://sandler.smarto.com.ua/ru/',
    outer: true,
  },
  {
    imageUrl: './assets/images/portfolio-images/works/notarius.jpg',
    text: 'HTML5, CSS3, JS, jQuery, SCSS',
    link: 'http://notarius.smarto.com.ua/',
    outer: true,
  },
  // {
  //   imageUrl: './assets/images/portfolio-images/works/lexus.jpg',
  //   text: 'HTML5, CSS3, JS',
  //   link: 'https://creativemind.media/landing/lexus/FamilyCar/',
  //   outer: true,
  // }
];
