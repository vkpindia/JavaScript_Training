//Web storage

//1. Local storage
//2. Session Strorage


/* 
* Global object for local storage is "localStorage"
* Global object for session storage is "sessionStorage"
*/

/* 
* localStorage methods
* for setting data to local torage we localStorage.setItem(key, value)
* for getting data from local torage we localStorage.getItem(key)
* for remove data from local torage we localStorage.removeItem(key)
* for clearing local torage we localStorage.clear()
 */

/* 
* sessionStorage methods
* for setting data to session torage we sessionStorage.setItem(key, value)
* for getting data from session torage we sessionStorage.getItem(key)
* for remove data from session torage we sessionStorage.removeItem(key)
* for clearing session torage we sessionStorage.clear()
*/

var students = [
    {
        name: "Smith",
        id: 1024
    },
    {
        name: "Scott",
        id: 1025
    },
    {
        name: "Palleti",
        id: 1026
    },
    {
        name: "Mohan",
        id: 1027
    },
    {
        name: "Raja",
        id: 1028
    }
];

var employees = [
    {
        empID: 1024,
        emapName: "Smith",
        empSalary: 30000
    },
    {
        empID: 1025,
        emapName: "Smith",
        empSalary: 30000
    },
    {
        empID: 1026,
        emapName: "Smith",
        empSalary: 30000
    },
    {
        empID: 1027,
        emapName: "Smith",
        empSalary: 30000
    },
    {
        empID: 1028,
        emapName: "Smith",
        empSalary: 30000
    }
];

var div = document.createElement("div");
div.setAttribute("id", "container");
div.setAttribute("class", "container_1");


var label = document.createElement("label");
var labelText = document.createTextNode("Select Student:");
label.setAttribute("for", "select_1");
label.setAttribute("class", "label_1");
label.appendChild(labelText);


var select = document.createElement("select");
select.id = "select_1";
select.setAttribute("class", "store_1");

var select2 = document.createElement("select");
select2.id = "select_2";
select2.setAttribute("class", "store_2");

students.map(data => {
    var option = document.createElement("option");
    var optionLabel = document.createTextNode(data.name);
    option.setAttribute("value", data.id);
    option.appendChild(optionLabel);

    select.appendChild(option);
});


div.appendChild(label);
div.appendChild(select);

document.body.appendChild(div);



var empObj = {
    name: "Smith",
    email: "smith@gmail.com",
    password: "smith@123"
};

var student_selection = document.getElementById("select_1");

student_selection.addEventListener('change', (event) => {
    setStudentInLocalStorage(student_selection.value)
    getStudentInSessiuonStorage(student_selection.value)
});


function setStudentInLocalStorage(studentID) {
    localStorage.setItem('studentID', studentID);
}

function getStudentInSessiuonStorage(studentID) {
    sessionStorage.setItem('studentID', studentID);
}

function setValue(){
   var studentID = localStorage.getItem("studentID");
   student_selection.value = studentID;
}

localStorage.setItem("studentRecord", JSON.stringify(students));

setValue();

/* setStudentInLocalStorage(student_selection.value);
getStudentInSessiuonStorage(student_selection.value); */



