function addRemoveEl(arr){

    let num = 0;

    let res = [];

    for(let command of arr){

        //console.log(command)

        if(command === "add"){

            num +=1;

            res.push(num);

        }else if(command === "remove" ){

            num +=1;
            //res.push(num);
            res.pop();

        }

        

    }

    //console.log(res)

    if(res.length !== 0){

        for(el of res){

            console.log(el)
        }
    }else{

        console.log("Empty")
    }

}

addRemoveEl(['remove', 
'remove', 
'remove']
)
