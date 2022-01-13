const array = new Array(1, 2, 3, 4, 5, 6);
// const array = [1, 2, 3, 4, 5, 6];

array[7] = 100;

console.log(array[3]);
console.log(array);
console.log(array.length);
array.push('new item');
console.log(array);

array.unshift('newnew item');
const pop = array.pop(); //shiftは前
console.log(pop);