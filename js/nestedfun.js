// JavaScript Supports nested function

// Aprroach =>
// Write one function inside another function
// Make a to the inner function in the return statement
// call it fun(a)(b) where a is the parameter to outer and be is to innner function
// Finally return the ccombined output from the nested function

/*
  Functions are another type of variables in JS. Creating a function within antother function 
  chnages the scope of the function in same way it would change the scope of variables.
  This is important for use with closures and reduce total global namespces.
 */

var pEle = document.getElementById('pEle');
var pEle_1 = document.getElementById('pEle_1');

console.log('pEle', pEle);
pEle.innerText = "Click On the button to call nested function";


function nestedDemo(firstName){ //outer method
   function nested_1(lastName){
      return firstName+ ' ' +lastName;
   }
  return nested_1;
}

/* var obj = new nestedDemo();
obj.nested_1(); */
/* var obj = new nestedDemo('Ashok');
obj.nested_1('Reddy'); */
function nestedDemoPrint(){
    pEle_1.innerText = 'Name:'+ ' '+ nestedDemo('Smith')('Cary'); // inner method call
}

// console.log('demoText',  nested_1('lastName'));