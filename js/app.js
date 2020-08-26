// Object
/* 
 * 1. Object Literal
 * 2. Object Constructor
 * 3. Function Construtor
*/


// Object Methods
// Array Methods
// String Methods
// keys, entries, hasOwnKey, assign

/* 
var employee = {
    name: "Ashok",
    salry: 45000
}

var employee_1 = {};

employee_1 = Object.assign({}, employee);

employee_1.name = "Scott";

console.log('employee', employee);

console.log('employee_1', employee_1); */
/* 
 * map()
 * filter()
 * reduce()
 * every()
 * some()
 * sort()
 * reverse()
*/


var selectImg = document.getElementById('imges');

var images = [
    { imgName: 'download.jpg', displayText: 'Nature 1' },
    { imgName: 'download_1.jpg', displayText: 'Nature 2' },
    { imgName: 'download_2.jpg', displayText: 'Nature 3' },
    { imgName: 'download_3.jpg', displayText: 'Nature 4' },
    { imgName: 'download_4.jpg', displayText: 'Nature 5' }
];

var option = "";

function setOptions() {
    /* for(let i=0; i<images.length; i++){
        console.log('i', i);
       console.log('imgName', images[i]);
    } */

    images.forEach((element, index) => {
        // console.log('element', element);
        /* console.log('image name', element.imgName);
        console.log('image display', element.displayText); */
        option += `<option value="${element.imgName}">${element.displayText}</option>`;
    });

    selectImg.innerHTML = option;
}

function setImgSRC(element) {
    var imgRef = document.getElementById('naturImg');
    imgRef.src = `/assets/images/${element.value}`
}



///function call
setOptions();