import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { IoMdCode } from 'react-icons/io';
import { TbBrowser } from 'react-icons/tb';

const services = [
  {
    id: 1,
    icon: <IoMdCode />,
    title: 'UI / UX Designer',
    descriptions: [
      'I create the user interface of the project. ',
      'Im using Figma, Photoshop, and Sketch technologies.',
      'I create UI / UX element interaction.',
      'Design and mockup of product for company.',
    ],
  },
  {
    id: 2,
    icon: <TbBrowser />,
    title: 'Web Development',
    descriptions: [
      'I develop the user interface of the website. ',
      'Im using HTML, CSS, and JavaScript to create the website.',
      'I create UX element interaction.',
      'Design and mockup of product for company.',
    ],
  },
  {
    id: 3,
    icon: <AiOutlineAppstoreAdd />,
    title: 'App Development',
    descriptions: [
      'I develop the user interface of the application. ',
      'lm using HTML, CSS, and JavaScript to create the application with android studio or flutter.',
      'I create UX element interaction.',
      'Design and mockup of product for company.',
    ],
  },
];

export default services;
