const stockinvested={
    compay_name:'TCS',
    amount:4160,
    shares:2
};
const {compay_name:name}=stockinvested;
console.log(name);

for(let ele in stockinvested){
    console.log(ele); 
}
for(let ele in stockinvested){
    console.log(stockinvested[ele]); 
}

