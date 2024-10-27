//const tinder=new Object();

const tinderuser={}
tinderuser.id="praneeth_sunny"
tinderuser.name="sunny"
tinderuser.islogin=false
//console.log(tinderuser);

const regualaruser={
    email:"sunny@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mittapalli",
            lastname:"Praneeth"
        }
    }
}
//console.log(regualaruser.fullname.userfullname);

const obj1={1:'a',2:'b'};
const obj={3:'c',4:'d'};

// const obj3={obj,obj1};
// const obj3=Object.assign({},obj,obj1);
// console.log(obj3);

// const obj6={...obj,...obj1}
// console.log(obj6);


const user=[
    {
        id:"user",
        data:"name"
    },
    {
        id:"king",
        name:"queen"
    },
]
console.log(user[1].id);
console.log(tinderuser);
console.log(Object.entries(user[1]));
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(tinderuser.hasOwnProperty('name'));
