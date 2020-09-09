// IIFE imediately invoked function expression
// Closure

/* 
  Closure means that an inner function always has access to the 
  variables and parameters of its outer function, even after 
  outer has returned
*/

function parentFun(){
   var parentVariable = 1;
   function childFun(){
    console.log('parentVariable', parentVariable);
 }
 childFun();
}

parentFun();

console.dir(parentFun);

function outerFunction(){
    var outerVariable = 100;
    function innerFunction(){
        console.log('outerVariable', outerVariable);
    }
    return innerFunction;
}

var innerFun = outerFunction();
console.dir(innerFun);
innerFun();


function counter(){
    var counter = 0;
    function increaseCounter(){
        return counter++;
    }
    return increaseCounter;
}

var counterValue = counter();
console.dir(counterValue)
console.log('increaseCount', counterValue());//0
console.log('increaseCount', counterValue());//1
console.log('increaseCount', counterValue());//2
console.log('increaseCount', counterValue());//3
console.log('increaseCount', counterValue());//4

function multilabelCounter() {
    var counter = 0;
     setTimeout(() => {
         var innerCounter = 0
         counter +=1;
         console.log('counter' + counter); //1

         setTimeout(() => {
            counter +=1; //2
            innerCounter +=1; //1
            console.log('counter:' + counter + ' ' + "innerCounter:" + innerCounter); 
        }, 1000);

     }, 1000);
}

multilabelCounter();

//How to hide implementation
var duplicateCounter = (function(){
    var privateCounter = 0;
    function modifyCounter(val){
        privateCounter += val;
    }

    return {
        increment: function(){
            modifyCounter(1); 
        },
        decrement: function(){
            modifyCounter(-1); 
        },
        showValue: function(){
            return privateCounter;
        }
    }
})();

console.log(duplicateCounter.showValue()); // 0
duplicateCounter.increment();
console.log(duplicateCounter.showValue()); // 1
duplicateCounter.increment();
console.log(duplicateCounter.showValue()); // 2
duplicateCounter.decrement();
console.log(duplicateCounter.showValue()); // 1

// console.log('duplicateCounter', duplicateCounter);


