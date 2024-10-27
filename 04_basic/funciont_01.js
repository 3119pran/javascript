// console.log("Hello");
// function addtwonumber(number1,number2){
//     console.log("sum:",number1+number2);
// }
// function subtwonumber(number1,number2){
//     return number1-number2;
// }
// addtwonumber(2,3);
// const res=subtwonumber(5,3);
// console.log("result:",res);

function loginuser(username){
    if(username==undefined){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`;
}
const data=loginuser("sunny");
console.log(data);

