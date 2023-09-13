function multiply(num1 , num2): string{
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("Função apenas para números!");
        return "";
    }else{
        return (num1 * num2).toString();
    }

}

function sum(num1, num2): string{
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("Função apenas para números!");
        return "";
    }else{
        return (num1 + num2).toString();
    }
}

function isEven(num): boolean | void {
    if(typeof num !== "number"){
        console.log("Função apenas para números!");
    }else{
        return num % 2 === 0;
    }

}

function showResult(result): void {
    if(typeof result !== "string"){
        console.log(`Função apenas para números!`);
        return;
    }
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1 = parseFloat(prompt("Primeiro número"));
    const num2 = parseFloat(prompt("Segundo número"));
    
    let result = sum(num1,num2);
    result += multiply(1,2);
    showResult(result);
})();
