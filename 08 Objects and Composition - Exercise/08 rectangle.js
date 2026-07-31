function rectangle(width, height, color){

    let char = color[0].toUpperCase();
    let sliced = color.slice(1);
    let newColor = char+sliced;

    //console.log(newColor)

return{   

    width: Number(width),
    height: Number(height),
    color: newColor,

    calcArea(){

        return this.width*this.height;

    }

}

}

