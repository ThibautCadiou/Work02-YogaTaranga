//Ce code est un bout de code que j'ai pompé à CHATGPT, Attention a sa compréhension

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Remonte en haut
  }, [pathname]);

  return null;
};

export default ScrollToTop;
