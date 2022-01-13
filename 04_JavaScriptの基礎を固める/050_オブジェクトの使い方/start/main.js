// const person = {};
// person.name = 'Code Mafia';

const person = {
    name: ['code', 'mafia'],
    age: 32,
    interets: {
        sports: 'soccer',
        music: 'piano'
    }, 
    getFullName: function() {
        console.log(this.name[0] + this.name[1]); //thisは宣言されたobjectを指す
    }
}

const ageKey = 'age';
person.age = 12;

console.log(person[ageKey]);

person.getFullName();