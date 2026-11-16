function toggle(){

    let textRef = document.getElementById("extra");

    let buttonRef = document.getElementsByClassName(".button");

    if(textRef.display.style === "none"){

        textRef.display.style = "block";
        buttonRef.textContent = "Less";

    }else{

        textRef.display.style = "none";
        buttonRef.textContent = "More";

    }

}
