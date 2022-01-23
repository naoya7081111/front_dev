class HeroSlider {
    constructor(el) {
      this.el = el;
      this.swiper = this._iniSwiper();
    }
  
    _iniSwiper() {
      return new Swiper('.swiper', {
        loop: true,
        grabCursor: true,
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 1,
        speed: 1000,
        breakpoint: {
          1024: {
            slidesPerView: 2
          }
        },
      });
    }
  
    start(options = {}) {
      options = Object.assign({
        delay: 4000,
        disableOnInteraction: false
      }, options);
      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
    }
    stop() {
      this.swiper.autoplay.stop();
    }
    hage() {
      this.swiper.autoplay.hage();
    }
  }
  