function extract(content) {

    let text = document.getElementById('id').textContent;

    let regText = //\(([^)]+)\)/g;

    let arr = [];


    let match = text.exec(regText)

    while(match){

       arr.push(match[1]);


    }

    arr.join("")

}
