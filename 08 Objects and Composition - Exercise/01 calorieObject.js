function calorieObject (arr){

    let obj = {};

    for(let i = 0; i < arr.length; i++){

        let temp = arr[i];

        if(i % 2 === 0){

           obj[temp] = Number(arr[i+1]);

        }
    }

    console.log(obj)

}

calorieObject ([
    'Yoghurt', '48', 'Rise', '138', 'Apple', '52'
])
