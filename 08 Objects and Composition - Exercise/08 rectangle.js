let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

function rectangle(width, height, color){

    let char = color[0].toUpperCase();
    let sliced = color.slice(1);
    let newColor = char + sliced;
    //console.log(newColor)

    return {

         width: Number(width),
         height: Number(height),
         color: newColor,

         calcArea(){

            return this.width*this.height; 

         }

    }

}
