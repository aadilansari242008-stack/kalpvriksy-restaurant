function orderFood(foodName){

    let message =
    "Hello Kalpvriksy Restaurant,%0A%0A" +
    "I want to order:%0A" +
    "🍽️ " + foodName;

    window.open(
        "https://wa.me/917352585780?text=" + message,
        "_blank"
    );

}

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    }else{
        header.style.boxShadow = "none";// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#8B0000";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function(){

    if(window.scrollY > 250){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// Table Booking

function bookTable(){

    const name = prompt("Enter Your Name");

    if(!name) return;

    const persons = prompt("Number of Persons");

    const date = prompt("Booking Date (DD/MM/YYYY)");

    const msg =
    "Hello Kalpvriksy Restaurant,%0A%0A" +
    "🍽️ Table Booking%0A" +
    "👤 Name: " + name + "%0A" +
    "👥 Persons: " + persons + "%0A" +
    "📅 Date: " + date;

    window.open(
        "https://wa.me/917352585780?text=" + msg,
        "_blank"
    );

}

console.log("Kalpvriksy Restaurant Website Loaded Successfully");
    }

});
