import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelopeOpen,
} from 'react-icons/fa';

import {
  FiFileText, FiCode,
} from 'react-icons/fi';
import Html from '../assets/html.jpeg';
import Js from '../assets/js.jpeg';
import Python from '../assets/python.png';
import Ruby from '../assets/ruby.jpeg';
import ROR from '../assets/ruby_on_rails.jpeg';
import Rails from '../assets/rails.png';
import Postg from '../assets/postgresql.png';
import Mysql from '../assets/mysql.png';
import Css from '../assets/css.jpeg';
import Reacts from '../assets/react.png';
import PairP from '../assets/pair_prog.png';
import Git from '../assets/git.png';
import FinalSpace from '../assets/finalSpace.png';
import SpaceTra from '../assets/spaceTr.png';
import BookStor from '../assets/bookStor.png';
import MathLog from '../assets/MathLo.png';
import Meals from '../assets/Meals.png';
import Budget from '../assets/budget.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className="nav__icon" />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className="nav__icon" />,
    path: '/about',
  },
  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className="nav__icon" />,
    path: 'portfolio',
  },
  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Girma',
  },
  {
    id: 2,
    title: 'Last Name : ',
    description: 'Tarekegn',
  },
  {
    id: 3,
    title: 'Nationality : ',
    description: 'Ethiopia',
  },
  {
    id: 4,
    title: 'Freelance : ',
    description: 'Available',
  },
  {
    id: 5,
    title: 'Address : ',
    description: 'Bahirdar',
  },
  {
    id: 6,
    title: 'Phone : ',
    description: '+251937699280',
  },
  {
    id: 7,
    title: 'Email : ',
    description: 'tarekegngirma21@gmail.com',
  },
  {
    id: 8,
    title: 'Languages : ',
    description: 'Amharic, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },
  {
    id: 2,
    no: '30+',
    title: 'Completed <br /> Projects',
  },
  {
    id: 3,
    no: '5+',
    title: 'Mentored junior <br /> web developers',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    icon: Html,
  },
  {
    id: 2,
    title: 'Css',
    icon: Css,
  },
  {
    id: 3,
    title: 'JS',
    icon: Js,
  },
  {
    id: 4,
    title: 'Ruby',
    icon: Ruby,
  },
  {
    id: 5,
    title: 'Rails',
    icon: Rails,
  },
  {
    id: 6,
    title: 'ROR',
    icon: ROR,
  },
  {
    id: 7,
    title: 'Postgresql',
    icon: Postg,
  },
  {
    id: 8,
    title: 'Mysql',
    icon: Mysql,
  },
  {
    id: 9,
    title: 'React',
    icon: Reacts,
  },
  {
    id: 10,
    title: 'Python',
    icon: Python,
  },
  {
    id: 11,
    title: 'Pair Programming',
    icon: PairP,
  },
  {
    id: 12,
    title: 'Git',
    icon: Git,
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Web Developer and Mentor at <span> Microverse </span>',
    desc: `Mentored junior web developers, providing technical support through code reviews.
        <br />Proposed improvements to code organization to improve code quality and overall performance.
        <br />Provided advice and tips on how to maintain motivation to maintain longevity in the program.
        `,
  },
  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016 - 2021',
    title: 'Electrical and computer Engineering <span> Deber Berhan </span>',
    desc: `Fundamental Electrical Engineering course and Computer Engineering course.
        <br />Applied Mathematics  1, 2 and 3 and core Computer Engineering courses and more
        `,
  },
  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 2023,
    title: 'Full Stack Web Development <span> Microverse </span>',
    desc: `Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.
        <br /> Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers. 
        `,
  },
];

export const portfolios = [
  {
    id: 1,
    title: 'Space Travelers',
    images: SpaceTra,
    git: 'https://github.com/girma336/space-travelers',
    live: 'https://girma336.github.io/space-travelers/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'This is a React WebApp with the real live data from the SpaceX API. The application will allow users to book Rockets, and join selected space missions.',
      },
      {
        icon: <FiCode />,
        title: 'Language : ',
        desc: 'React, Js, Html',
      },
    ],
  },
  {
    id: 2,
    title: 'Math magicians',
    images: MathLog,
    git: 'https://github.com/girma336/math-magicians',
    live: 'https://math-magicicn.onrender.com',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote',
      },
      {
        icon: <FiCode />,
        title: 'Language : ',
        desc: 'React, Js, Html',
      },
    ],
  },
  {
    id: 3,
    title: 'Final Space',
    images: FinalSpace,
    git: 'https://github.com/girma336/react-capstone',
    live: 'https://final-speces-app.onrender.com/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'is a basic website that displays a number of final space character. A user can see more description for character both mobile and computer single page app.',
      },
      {
        icon: <FiCode />,
        title: 'Language : ',
        desc: 'React, Js, Html',
      },
    ],
  },
  {
    id: 4,
    title: 'Book Store',
    images: BookStor,
    git: 'https://github.com/girma336/bookstore-react',
    live: 'https://book-react-app-fjfx.onrender.com/',
    details: [

      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Book store app is a single-page app (SPA) that allows users to display a list of books, add a book, and remove selected books.',
      },
      {
        icon: <FiCode />,
        title: 'Language : ',
        desc: 'React, Js, CSS, Html',
      },
    ],
  },
  {
    id: 5,
    title: 'Budget App',
    images: Budget,
    git: 'https://github.com/girma336/budget-app',
    live: 'https://budget-app-girma.onrender.com/',
    details: [

      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      },
      {
        icon: <FiCode />,
        title: 'Language : ',
        desc: 'Ruby on Rails, Postgresql',
      },

    ],
  },
  {
    id: 6,
    title: 'Meals App',
    images: Meals,
    git: 'https://github.com/girma336/capston-project-js',
    live: 'https://girma336.github.io/capston-project-js/',
    details: [

      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: ' is a basic website that displays a number of meals. A user can like, or comment on a meal they choose. We will achieve that by using JavaScript to dynamically modify the DOM.',
      },
      {
        icon: <FiCode />,
        title: 'Language : ',
        desc: 'Js, Css, Html, Webpack',
      },
    ],
  },
];
