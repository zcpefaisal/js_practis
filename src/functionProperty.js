//for general call
function a(b, c){
    console.log('This is function call');
    console.log(this); //for strict this = undifined, for nonstrict this = window object (gloal contest)
    console.log(b);
    console.log(c);
}
a(2,3);

//for function property bind example
function a(b, c){
    console.log('This is function call');
    console.log(this); //hello
    console.log(b);
    console.log(c);
}
var d = a.bind('hello');
d(2,3);


//for function property call example 
function a(b, c){
    console.log('This is function call');
    console.log(this); //hello
    console.log(b);
    console.log(c);
}
a.call('hello', 5,4);

//for function property apply example 
function a(b, c){
    console.log('This is function call');
    console.log(this); //hello
    console.log(b);
    console.log(c);
}
a.apply('hello', [5,4]);
