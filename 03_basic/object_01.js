//singleton


//object literals

const mysum=Symbol("keys1");
const juser={
    name:"Praneeth",
    "fullname":"Mittapalli Praneeth",
    age:20,
    [mysum]:"mykeys1",
    email:"sunnypraneeth3119@gmail.com",
    isloggedin:false,
    lastlogin:["Monday","Thrusday"]
};
// console.log(juser.name);
// console.log(juser["email"]);
// console.log(juser["fullname"]);
// console.log(juser[mysum]);

// juser.email="praneethmittapalli172004@gmail.com"
// Object.freeze(juser);
// console.log(juser["email"]);
// juser.email="praneethmittapalli@gmail.com";
// console.log(juser["email"]);
// console.log(juser);


juser.greeting=function(){
    console.log("Good Morning");
}

juser.greetingtofriend=function(name){
    console.log(`Good Morning ${this.name}`);
}
console.log(juser.greetingtofriend());
