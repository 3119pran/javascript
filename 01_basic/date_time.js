console.log(Date);
let today=new Date();
console.log(today);
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toJSON());
console.log(today.toLocaleString());
console.log(typeof today);

var createdate=new Date(2004,6,1);
console.log(createdate.toDateString());
var createdate=new Date(2004,6,1,4,0);
console.log(createdate.toLocaleString());

let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(createdate.getTime());

console.log(Math.floor(Date.now()/1000));

createdate.toLocaleString('default',{
    weekday:"long"
})
console.log(createdate.toString());
