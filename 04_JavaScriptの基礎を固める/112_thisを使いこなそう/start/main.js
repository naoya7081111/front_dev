document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
});


console.log(this);

class TextAnimation {
    constructor(el) {
        console.log(this);
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        // アロー関数でならエラーにならない
        // bindをつけると、thisを束縛できる
        // window.setTimeout(function() {
        //     console.log(this)
        //     this.el.classList.toggle('inview');
        // }.bind(this))
        this.el.classList.toggle('inview');
    }
}
