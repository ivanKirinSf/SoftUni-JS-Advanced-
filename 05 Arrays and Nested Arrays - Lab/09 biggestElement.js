function biggestElement(arr){

    let biggestEl = 0;

    let sortedA = arr[0].sort((a, b) => a-b);

    let AbigEl = sortedA.pop();

    let sortedB = arr[1].sort((a, b) => a-b);

    let BbigEl = sortedB.pop();

    if(AbigEl > BbigEl){

        biggestEl = AbigEl;

    }else{

        biggestEl = BbigEl;

    }

    return biggestEl

}
