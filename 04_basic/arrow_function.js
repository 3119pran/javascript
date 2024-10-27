const cart={
    username:"Sunny",
    price:100,
    welcome:function(){
        console.log(`${this.username}, Welcome to our Website`);
        // console.log(this);
    }
}
// cart.welcome()
// cart.username="Praneeth"
// cart.welcome()

// console.log(this);

// we should not use the this keyword in function if we use the this keyword than it will display undefined

// const res=()=>{
//     const username="Ramu"
//     console.log(this.username);
// }
// res()

const addtwodig=(num1,num2)=>(num1+num2)
console.log(addtwodig(2,3));
const add=()=>({username:"Ravi"})
console.log(add());