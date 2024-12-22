const element = document.getElementById("order");
const myName = document.getElementById("myname"); 
const add = document.getElementById("add");

element.addEventListener("click", myFunction); 

function myFunction(){
    if(myName.value==""||add.value==""){
        alert("Form is empty"); 
    }
    else{
        window.location.assign("index.html")
    }
}