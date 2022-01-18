const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log('hello');
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log('hello');
    }
}

obj.printFullName();

const ob2 = new MyObj();
ob2.printFullName();