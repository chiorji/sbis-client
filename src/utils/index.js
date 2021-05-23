import { useLocation } from 'react-router-dom';
import avatar from '../assets/img/2.jpg';

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


export const listing = [
  { avatar: avatar, name: 'Name', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Name', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Name', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Name', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Name', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { avatar: avatar, name: 'Name', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
];
