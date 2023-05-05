
function factorial (number) {
    let product = 0;
    let result = 0;
    if (number === 0){
        return 1;
    }else {
        
    for (let i = number; i > 0; i--) {
        product = i * number;
        result += product;
        
    }
    console.log(product);
}
}
factorial(4);