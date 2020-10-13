import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from'../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

const options = {
  rewind: true,
  autoplay: true,
  loop: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 3
      },
      1024: {
          items: 3
      },
    
  }
};
const Works = () => {
  return (
   <section className="work-container" style={{backgroundColor:'#111430'}}>
      <div className="text-center mt-5 mb-5">
      <h2 style={{color: '#FFFFFF'}}>Here are some of <span className="text-brand">Our Works</span> </h2>
      <div className="mt-5 ml-5">
        
   <OwlCarousel options={options} >
	<div><img src={carousel1} alt="" style={{ height: '334.7px', width: '465.49px' }}/></div>
  <div><img src={carousel2} alt="" style={{ height: '334.7px', width: '465.49px' }}/></div>
  <div><img src={carousel3} alt="" style={{ height: '334.7px', width: '465.49px' }}/></div>
  <div><img src={carousel4} alt="" style={{ height: '334.7px', width: '465.49px' }}/></div>
  <div><img src={carousel5} alt="" style={{ height: '334.7px', width: '465.49px' }}/></div>

</OwlCarousel>
      </div>
    </div>
   </section>
  );
};

export default Works;