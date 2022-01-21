const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target); //監視を解除
        } else {
            entry.target.classList.remove('inview');
        }
    })
    // alert('intersecting');
}
const option = {
    root: null,
    rootMargin: "-300px 0px 0px 0px", //pxを必ずつける
    threshold: 0
}
const io = new IntersectionObserver(cb, option);
io.observe(child);
// io.observe(child1);
// io.observe(child2);