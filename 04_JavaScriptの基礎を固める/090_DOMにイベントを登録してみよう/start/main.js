const btn = document.querySelector('#btn');

function Hello() {
    this.style.color = 'red';
    console.log(this)
}

btn.addEventListener('click', Hello)
// btn.addEventListener('mouseenter', Hello)
// btn.removeEventListener('mouseenter', Hello)
