function Animal(type, live){
    this.type = type;
    this.live = live;
}

class Human extends Animal{
    constructor(name){
        super('mammal', true)
        this.name = name;
    }
}

var faisal = new Animal('Faisal', true);
console.log(faisal.type);
console.log(faisal.live);