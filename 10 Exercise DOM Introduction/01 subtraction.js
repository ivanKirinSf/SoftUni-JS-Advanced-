function subtract() {

    let firstInputRef = document.getElementById('firstNumber');
    let secInputRef = document.getElementById('secondNumber');
    let resultRef = document.getElementById('result');

    let firstNum = Number(firstInputRef.value);
    let secondNum = Number(secInputRef.value);

    let res = firstNum - secondNum;

    resultRef.textContent = res;

}
