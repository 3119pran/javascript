//stack(Primitive), head(non Primitive)

const name="sunny";
const rep=50;
console.log(`My name is ${name}.`);
const goodname=new String("Praneeth");
console.log(goodname[0]);
console.log(goodname.toLowerCase());
console.log(goodname.charAt(1));
console.log(goodname.indexOf('P'));
const sub=goodname.substring(2);
console.log(sub);
const and=goodname.slice(-2,8);
console.log(and);
const name1="  sunny";
console.log(name1.trim());
const re=name1.replace('s','d');
console.log(re);
console.log(name.includes('s'));
const  names="Praneeth Ravi Vani Sri Laxmi";
const listname=names.split(" ");
console.log(listname);

