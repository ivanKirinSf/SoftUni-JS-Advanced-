function circleArea(arg){

    let type = typeof(arg);

    if(type === "number"){

      let area = Math.PI*Math.pow(arg, 2);

      console.log(area.toFixed(2))

    }else{

    console.log(`We can not calculate the circle area, because we receive a ${type}.`);

    }

    //console.log(type)

}

circleArea('name')
