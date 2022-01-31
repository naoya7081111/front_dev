document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this._observers = [];
        this._init();
    }

    set setobservers(val) {
        this._observers.push(val);
    }

    get getobservers() {
        return this._observers;
    }

    _init() {
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }

    _inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _sideAnimation(el, inview) {
        if(inview) {
            this.sides.forEach(side => {
                side.classList.add('inview');
            })
        } else {
            this.sides.forEach(side => {
                side.classList.remove('inview');
            })
        }
    }

    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }
    _scrollInit() {
        this.setobservers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false})
        this.setobservers = new ScrollObserver('.cover-slide', this._inviewAnimation)
        this.setobservers = new ScrollObserver('.tween-animate-title', this._textAnimation);
        this.setobservers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false});
        this.setobservers = new ScrollObserver('.appear', this._inviewAnimation);
        this.setobservers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px"});
        // console.log(this.getobservers); //getが呼ばれる
    }
}