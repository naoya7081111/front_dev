const arry = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arry.length; i++) {
//     console.log(i);
// }

for(let i in arry) {
    let v = arry[i];
    console.log(i, arry[i], v)
}

// 値
for(let v of arry) {
    console.log(v)
}