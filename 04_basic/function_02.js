function calculatetotalmarks(...num){
    return num;
}
console.log(calculatetotalmarks(18,17,11,21,21));


const user ={
    username:"sunny",
    price:54
}
function handle(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handle(user)
handle({
    username:"praneeth",
    price:99
})
const arr=[1,3,5,7,8,9];
function arrname(getArray){
    return getArray[1];
}
console.log(arrname(arr));

