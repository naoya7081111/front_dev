// document.addEventListener('DOMContentLoaded', () => {
//     const el = document.querySelector('.animate-title');
//     const str = el.innerHTML.trim();
//     let concatStr = '';

//     for(let c of str) {
//         c = c.replace(' ', '&nbsp;');
//         concatStr += `<span class='char'>${c}</span>`
//     }

//     el.innerHTML = concatStr;
// })

document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim().split("");
    
    el.innerHTML = str.reduce((accu, curr) => {
        curr = curr.replace(' ', '&nbsp;');
        return `${accu}<span class='char'>${curr}</span>`;
    }, '');
})

// innerHTMLはパフォーマンスが落ちる