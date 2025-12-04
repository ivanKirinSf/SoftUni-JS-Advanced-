function proOddPos(arr){

    let filtered = arr.filter((a, i) => i % 2 !== 0);

    let doubled = [];

    for(let el of filtered){

        let newEl = el*2;

        doubled.push(newEl)

    }

    let reversed = doubled.reverse();

    return reversed.join(" ");

}

proOddPos([10, 15, 20, 25])
