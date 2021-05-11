import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollToTop = () => {
  const {pathname, hash} = useLocation();

  useEffect(() => {
    if (hash !== '' || null) {
      const elem = document.querySelector(hash);
      if (elem) {
        elem.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
