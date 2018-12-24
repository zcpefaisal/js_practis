var dog = {
    name: "kallu",
    bark(){
        console.log(`Woof!!!!!! ${this.name}`);
    }
}

var x = dog.bark; //get out method from dog oject 
dog.bark(); //general call
x(); //this is undifine from dog object contet
x.call(dog);//pass contaxt a object as value of this,  