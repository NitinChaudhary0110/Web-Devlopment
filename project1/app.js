let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");


btn.addEventListener("click",function(){
let list=document.createElement("li");
list.innerText=inp.value;
ul.appendChild(list);

let delbtn=document.createElement("button");
delbtn.innerText="delete";
delbtn.classList.add("button");
list.appendChild(delbtn);

inp.value="";

})


ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
        console.log("task delete");
        
    }
})