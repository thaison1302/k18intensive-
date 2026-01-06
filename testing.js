// 1
const productInfo = (product,price) => {
    return `San pham ${product}, Gia: ${price} VND`;
}
const result = productInfo("sach", 20000);
console.log(result)
// 2
const greet = (username) =>{
    return `Xin chao, ${username}`;
}
console.log(greet("An"));
// 3
const sumUpTo = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum
}
const sumValue = sumUpTo(5);
console.log("sumValue: ",sumValue)
// 4
const Square = (n) =>{
    return Math.pow(n, 2);
}
const Mathsquare = Square(6);
console.log("result: ", Mathsquare)
// 5
const isEven = (n) =>{
    if(n % 2 == 0){
        return true;
    }
    else 
        return false;
}
const Even = isEven(3);
console.log("Even?: ", Even)
// 6
