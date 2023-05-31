import React from 'react';
import '../style/Footer.css';
import buttonImg from '../img/uptoTop.jpg';
const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

  return (
    <div className='ft'>
            <h2 className='ft-h2'>Burak Kizilkaya</h2>
            <h3 className='ft-h2'> This app developed for my web programming and design course</h3>
            <div className='contentUp'>
                <button className='btnImg' onClick={handleScrollToTop}><img className='uptoTop' src={buttonImg}/></button>
            </div>
    </div>
  )
}

export default Footer