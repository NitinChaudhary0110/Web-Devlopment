// Input, button, and unordered list elements ko select karna
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// Jab "Add Task" button pe click ho
btn.addEventListener("click", function () {
    // Ek naya <li> element banate hain
    let list = document.createElement("li");
    
    // <li> ke andar input field ka text set karte hain
    list.innerText = inp.value;
    
    // <ul> ke andar <li> add kar dete hain
    ul.appendChild(list);

    // Delete button create karte hain
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete"; // Button ka text set karna
    delbtn.classList.add("button"); // CSS class add karna (agar style diya ho)
    
    // Delete button ko <li> ke andar lagate hain
    list.appendChild(delbtn);

    // Input field ko clear kar dete hain
    inp.value = "";
});

// Event delegation: pura <ul> pe click event lagaya gaya hai
ul.addEventListener("click", function (event) {
    // Agar click hua element ek BUTTON hai
    if (event.target.nodeName == "BUTTON") {
        // Uss button ka parent element (li) remove kar doo
        let par = event.target.parentElement;
        par.remove(); // Task delete karna
        console.log("task delete"); 
    }
});
