function generate(type){
    if(type === 'plus'){
        return (a,b) => a+b; //arrow function 
    }
    if(type === 'minus'){
        return (a,b) => a-b; //arrow function 
    }
    if(type === 'multiply'){
        return function m(a,b){ return a*b }; //general function  
    }
    if(type === 'divide'){
        return function m(a,b){ return a/b }; //general function  
    }
}

var x = generate('divide');
console.log( x(10,2));