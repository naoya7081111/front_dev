const arry = [1,2,3,4,5];

arry.reduce(function(accu, curr) {
    console.log(accu, curr);
    // return accu + curr;
}, 10);

// accuには前回の戻り値がはいる　currには配列の数字が入る

const str = 'animation';
const strArry = str.split('');
console.log(strArry);

const result = strArry.reduce((accu, curr) => {
    return accu + '<' + curr + '>';
}, '');

console.log(result);