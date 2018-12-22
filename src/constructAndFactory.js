//factory patern oject create
function CreateHuman(name, age, gender){
    return{
        name:name,
        age:age,
        gender:gender
    }
}

var a = CreateHuman('Faisal', 27, 'male');
var s = CreateHuman('Adnan', 22, 'male');

console.log(a);
console.log(s);

//if object name is same with param then can return direcroey 
function CreateHuman(name, age, gender){
    return{
        name,
        age,
        gender
    }
}

var a = CreateHuman('Faisal', 27, 'male');
var s = CreateHuman('Adnan', 22, 'male');

console.log(a);
console.log(s);

//construct function type method
///most popular in js
function Human(name, age, gender){
    this.name = name,
    this.name = age,
    this.name = gender
}

var a = new Human('Faisal', 27, 'male');
var s = new Human('Adnan', 22, 'male');

console.log(a);
console.log(s);