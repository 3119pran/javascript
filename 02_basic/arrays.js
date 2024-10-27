const arry=[0,1,2,3];
console.log(arry);
console.log(arry[0]);

arry.push(5);
console.log(arry);
arry.unshift(-1);
console.log(arry);
arry.pop();
console.log(arry);
arry.shift();
console.log(arry);
console.log(arry.includes(0));
console.log(arry.indexOf(3));
console.log(arry.join());
console.log(typeof arry);

let myarry=[0,2,4,6,8];
console.log("actual array",myarry);
const myar1=myarry.slice(0,3)
console.log("slice array",myar1);
console.log(myarry);
const myar2=myarry.splice(0,3);
console.log("splice array",myar2);
console.log(myarry);

