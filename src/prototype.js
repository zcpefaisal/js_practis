var a = {
    b:10,
    c:'hello world'
}

var d = Object.create(a);
a.b = 11;
d.b = 90;
d.c = 'faisal';
console.log(d.hasOwnProperty('b'));
console.log(a.b);
console.log(a.c);
console.log(d.b);
console.log(d.c);
