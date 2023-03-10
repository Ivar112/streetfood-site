import bootstrap from 'bootstrap';
import Swiper from 'swiper';


(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:992px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }

  };

  const enableSwiper = function() {
    mySwiper = new Swiper('.foodSwiper', {
      slidesPerView: 'auto',
      spaceBetween: 32,
    });

  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})();

window.addEventListener('scroll', function() {
  if (window.scrollY > 50 ) {
    document.body.classList.add('fill-menu');
  } else {
    document.body.classList.remove('fill-menu');
  }
})

document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.body.classList.toggle('menu-open');
})

document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark');
})