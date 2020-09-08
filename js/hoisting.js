/* 
  1. Hoisting is a concept, not a feature of JS.
  2. In JS, variable and function names can be used before declaring it.
  3. JS Compiler moves all the declarations of the variables and function at the top so that there will not be any error
  4. This is called hoisting in JS
*/

/* // var, let, const
let y = 20; // redefinable but not redeclarable

const z = 20;// not redefinable but mutable


function fullName(){
    console.log('y', y);//undefined
    console.log('z', z);//undefined
    x = 10;
    console.log('x', x);
    var x;
}


var x = 10;
console.log('x', x);//10

var y;
y=20;
console.log('y', y);//20

 a=20;//initialization
console.log('a', a); // 20
 */
/* a=20;//initialization
console.log('a', a); // 20
var a;//declaration */
console.clear();
x = 1;

console.log('x', x);
var x;

// A variable can initialized and assigned to another variable 

a = 50;
b = a;
console.log('a', a);
console.log('b', b);

var a;
var b;


// Hoisting is not applicable for initialized variable
console.log('c', c);
var c = 30;


// Function hoisting

console.log('fullName', fullName('Ashok', 'Kumar'));

function fullName(fname, lname){
    return fname+ ' ' +lname;
}

// console.log('fullName', fullName('Ashok', 'Kumar'));

// Function Hoisting before variables

console.log('zyx', zyx);
var zyx;
function zyx(){
    alert('xyz function called');
}

// Hoisting with function expression

console.log('fullName_1', fullName_1('Ashok', 'Kumar'));// error

var fullName_1 = function(fname, lname){
    return fname+ ' ' +lname;
}


