function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
console.log(makeFunc());

//fresh function
// var a = 1;
// function test(){
//   console.log(a);
// }
// test();