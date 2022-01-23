document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider();
  hero.start({ delay: 2000 });

  setTimeout(() => {
    hero.stop();

  }, 5000)
});

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
//     effect: 'coverflow',
  
//     // // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
  
//     // // Navigation arrows
//     // navigation: {
//     //   nextEl: '.swiper-button-next',
//     //   prevEl: '.swiper-button-prev',
//     // },
  
//     // // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });