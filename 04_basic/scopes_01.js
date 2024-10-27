
{
    let a=10;
    const b=20;
    var c=30;
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const area="hyderabad"
    function colony(){
        const name='Praneeth'
        console.log("Lingamaiah colony");
        console.log(area);
    }
    colony()
    //console.log(name)
}
one()

if(true){
    const name="Praneeth";
    if(name=="Praneeth"){
        const website="gaming page"
        console.log(`username ${name} and website ${website}`)
    }
    // console.log(website)
}
//console.log(name);


//+++++++++++++++++ Types of Functions ++++++++++

function addone(num){
    return num+1;
}
let num=10
addone(num);

const addtwo=function(num){
    return num+2;
};
addtwo(11)
