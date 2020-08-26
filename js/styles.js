var listcontainer = document.getElementById("listcontainer");
var para = document.getElementById("para");

var btn = document.createElement("button");
var btnRemoveClass = document.createElement("button");

btn.setAttribute("id", "styleBtn");
btn.setAttribute("class", "btn-click");

btnRemoveClass.setAttribute("id", "removeClass");
btnRemoveClass.setAttribute("class", "remove-class");

// btn.innerText = "Apply Styles";
var btnText = document.createTextNode("Apply Styles");
var btnRemoveClassText = document.createTextNode("Remove Class");

btn.appendChild(btnText);
btnRemoveClass.appendChild(btnRemoveClassText);

listcontainer.appendChild(btn);
listcontainer.appendChild(btnRemoveClass);

function changeDynamicStyles(){
   listcontainer.style.backgroundColor = "blue";
   listcontainer.classList.add("container");
}

function removeClass(){
    console.log('listcontainer.classList.contains("container")', listcontainer.classList.contains("container"));
   if(listcontainer.classList.contains("container")){
    listcontainer.classList.remove("container"); 
    listcontainer.style.backgroundColor = "";
   } else {
       alert("conatiner class is not available");
   }
}


// btn.setAttribute("onclick", "changeDynamicStyles()");

btn.addEventListener('click', ()=>{
    changeDynamicStyles();
});

btnRemoveClass.addEventListener('click', ()=>{
    removeClass();
});