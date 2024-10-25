//Primitive

// 7 types:String,Number,Boolean,null,undefinded,Symbol,BigInt


const score=100;
const scorevalue=100.5

const islog=false;
const outsidetmp=null;
let useemail;

const id=Symbol('22');
const anid=Symbol('22');
console.log(id==anid);

const BigInt=579846813797416974n;



//Dynamic type

// Reference(Non Primitive)

//Array,object,Function

const heros=['Spiderman','Shaktiman','Ironman','Captian America'];
let mydetails={
    name:"praneeth",
    age:20,
    area:"lingampally",
};

const fun=()=>{
    console.log("good Morning");
    
};
console.log(heros);
fun();
const hello=function(){
    console.log("Hello World");
};
hello();
console.log(mydetails);

