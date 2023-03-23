import './banner.css'

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Banner = () => {
  const location = useLocation();
  const [aboutPage, setAboutPage] = useState(location.pathname === '/about'); 

  useEffect(() => {
    setAboutPage(location.pathname === '/about');
  }, [location]);

  return (
    <section className={aboutPage ? 'banner_about' : 'banner'}>
      {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  );
};

export default Banner;

