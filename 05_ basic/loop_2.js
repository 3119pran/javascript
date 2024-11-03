const coding=['js','c','java','python'];
// coding.forEach(function(items){
//     console.log(items);
// })

// coding.forEach((items)=>{
//     console.log(items);
// })


let numbers=[1,2,3,4,5,6,7,8];
// const number=numbers.filter((num)=> num>4);
// console.log(number);

// const number =numbers.filter((num)=>(
//     num>6
// ))
// console.log(number);


// const books=[
//     {
//         bookname:"ramayanam",gener:'Real Story'
//     },
//     {
//         bookname:"Doremon",gener:'Animated'
//     },
//     {
//         bookname:"Maha bharatam",gener:'Real Story'
//     },
//     {
//         bookname:"one piece",gener:'boystory'
//     }
// ];

// const userbook=books.filter((bk)=>bk.gener=='Real Story')
// console.log(userbook);

// const number=numbers.map((num)=>(num+10));

const nu=[1,2,3,4,5];
// const number=nu.map((num)=>(num*10)).map((num)=>(num*10));
// console.log(number);


// const totalsum=nu.reduce((sum,items)=>(sum+items),0);
// console.log(totalsum);

// const total=nu.reduce(function(acc,cur){
//     return acc+cur;
// },0);
// console.log(total);


const course=[
    {
        itemname:"mobile app",
        price:5000
    },
    {
        itemname:"web app",
        price:5000
    },
    {
        itemname:"java",
        price:1000
    },
]
const amount=course.reduce((total,items)=>(total+items.price),0);
console.log(amount);
