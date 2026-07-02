function carFactory(car){

    const order = {};

    order.model = car.model;

    let carPower = car.power;

    if(carPower <= 90){

       order.engine = {};

       order.engine.power = 90;
       order.engine.volume = 1800;

    }else if(carPower <= 120){

        order.engine = {};

        order.engine.power = 120;
        order.engine.volume = 2400;

    }else {

        order.engine = {};

        order.engine.power = 200;
        order.engine.volume = 3500;

    }

    let carCarriage = car.carriage;

    if(carCarriage === 'hatchback'){

        order.carriage = {};

        order.carriage.type = carCarriage;

        order.carriage.color = car.color;

    }else if(carCarriage === 'coupe'){

        order.carriage = {};

        order.carriage.type = carCarriage;

        order.carriage.color = car.color;

    }

    let carWheels = car.wheelsize;

    if( carWheels % 2 === 0 ){

        let size = carWheels - 1;

        let arr = [];

        arr.push(...Array(4).fill(size));

        order.wheels = arr;        

    }else{

        let size = carWheels

        let arr = [];

        arr.push(...Array(4).fill(size));

        order.wheels = arr;          

    }

    return order

}
