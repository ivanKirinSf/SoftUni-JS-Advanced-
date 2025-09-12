function circleArea(input){

let type = typeof input;

if(type == "number"){

    let area = Math.PI * input ** 2;

    console.log(area)

}else {

    console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    
}

//console.log(type)

}

circleArea(5);
circleArea('name')
