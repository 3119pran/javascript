// for (let index = 0; index < 10; index++) {
//     console.log(index++);
// }


//for of
// const object=[1,2,3,5,5]
// for (const element of object) {
//     console.log(element);
// }

// const name="sunny";
// for(const letter of name){
//     console.log(letter);
    
// }

//Maps

const map=new Map()
map.set('telangana','Hyderabad');
map.set('Andhra pradesh','Amaravati');
// console.log(map);
// for(const key of map){
//     console.log(key);  
// }
// for(const [key,value] of map){
//     console.log(key,':',value);  
// }
// for(const key of map.values()){
//     console.log(key);  
// }

// const names={
//     name:'praneeth',
//     age:20
// };
// for(const items in names){
//     console.log(names[items]);
    
// }

const heros=["Capitan America","Marvel Heros"];
// heros.forEach(function(val){
//     console.log(val);
    
// })

// function printme(params) {
//     console.log(params);
    
// }
// heros.forEach(printme)

// heros.forEach((items,idx,arr)=>{
//     console.log(items,idx,arr);
    
// })


const mycoding=[
    {
        language:"c",
        extension:"c"
    },
    {
        language:"java",
        extension:"java"
    },
    {
        language:"Java Script",
        extension:"js"
    }
]

mycoding.forEach((items)=>{
    console.log(items.language);
    
})
