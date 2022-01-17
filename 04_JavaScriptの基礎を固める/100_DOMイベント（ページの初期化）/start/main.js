// const h1 = document.querySelector('h1');
// h1.style.color = 'red';

const dcl = document.querySelector('.dcl');
const load = document.querySelector('.load');

// HTMLのDOMツリーが生成されてから発火する
document.addEventListener("DOMContentLoaded", function () {
    dcl.classList.add('done');
});

// 写真などすべてダウンロードされてから発火する
window.addEventListener("load", function () {
    load.classList.add('done');
});