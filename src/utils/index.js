import { useLocation } from 'react-router-dom';
import avatar from '../assets/img/2.jpg';

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


export const listing = [
  { avatar: avatar, name: 'Principal', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Head Mistress', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Form Teacher', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Form Teacher', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Form Teacher', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Form Teacher', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
];
