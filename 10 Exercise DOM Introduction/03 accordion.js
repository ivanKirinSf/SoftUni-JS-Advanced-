function toggle(){

    let extraReff = document.getElementById("extra");

    let buttonReff = document.querySelector(".button");

    if(extraReff.style.display === "none"){

        extraReff.style.display = "block";
        buttonReff.textContent = "Less"

    }else{

        extraReff.style.display = "none";
        buttonReff.textContent = "More";

    }

}
