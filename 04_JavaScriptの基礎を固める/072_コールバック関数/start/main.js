// function hello(callback, lastName) {
//     console.log(callback)
//     console.log('hello ' + callback(lastName));
// }

// function getName() {
//     return 'Code Mafia';
// }

// function getFirstName () {
//     return 'Code';
// }

// hello(getFirstName);

// // hello(function(){
// //     return 'Code';
// // });

// hello( (name)=> {
//     return 'Code' + ' ' + name;
// }, 'Mafia');

function doSomething(a, b, callback){
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(2, 3, plus);
doSomething(2, 3, multiply);