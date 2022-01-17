document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000)
//     const el = document.querySelector('.animate-title');
//     const el2 = document.querySelector('.animate-title-2');
//     const str = el.innerHTML.trim().split("");
//     const str2 = el2.innerHTML.trim().split("");
    
    // let concatStr = '';

    // for(let c of str) {
    //     c = c.replace(/\s+/, '&nbsp;');
    //     concatStr += `<span class="char">${c}</span>`;
    // }

//     el.innerHTML = str.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
//     el2.innerHTML = str2.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
});

class TextAnimation {
    constructor(el) {
        // thisは変数を格納
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    // プライベートメソッド クラスの中だけで使用
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    // パブリックメソッド　
    animate() {
        this.el.classList.toggle('inview');
    }

    log() {
        console.log(this.el);
    }
}

// alert(ta.el);
// ta.log();




// class TextAnimation {
//     constructor(el) {
//         // thisは変数を格納
//         this.el = el;
//         alert(el);
//     }
//     log() {
//         console.log(this.el);
//     }
// }

// const ta = new TextAnimation('hello world');
// // alert(ta.el);
// ta.log();