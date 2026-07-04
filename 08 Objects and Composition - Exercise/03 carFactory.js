function carFactory(order){

    let car = {};

    car.model = order.model;

    let power = order.power;

    if(power <= 90){

       car.engine = {

        power : 90,

        volume : 1800

       }

    }else if(power <= 120){

        car.engine = {

        power : 120,

        volume : 2400

       }

    }else{

         car.engine = {

        power : 200,

        volume : 3500

       }        

    }

    car.carriage = {

        type : order.carriage,

        color: order.color

    }

    if(order.wheelsize % 2 === 0){

        let size = Number(order.wheelsize) - 1;

        let arrWheels = new Array(4).fill(size);

        //arrWheels.push(size).fill(size, 0, 3);

        car.wheels = arrWheels;

    }else{

        let size = Number(order.wheelsize);

        let arrWheels = new Array(4).fill(size);

        //arrWheels.push(size).fill(size, 0, 3);

        car.wheels = arrWheels

    }

    return car   

}

carFactory({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 })
