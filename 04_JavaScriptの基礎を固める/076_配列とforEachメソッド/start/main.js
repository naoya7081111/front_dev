const arry = [1, 2, 3, 4, 5];

// 中身のfunctionはコールバック関数
arry.forEach(function(val, i, ary) {
    console.log(val, i, ary);
})

