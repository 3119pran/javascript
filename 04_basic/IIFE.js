//Normal Function
function names(){
    console.log("M.Praneeth");
    console.log("M.SriLaxmi");
    console.log("M.Vani");
    console.log("M.Ravi");
}

//Immediately Invoked Function Expression
// It is named IIFE
(function names(){
    console.log("M.Praneeth");
    console.log("M.SriLaxmi");
    console.log("M.Vani");
    console.log("M.Ravi");
})();

//Using Arrow Function IIFE
// it is Non named iife
(()=>{
    console.log("M.Praneeth");
    console.log("M.SriLaxmi");
})();

//Parameter IIFE

(function goodname(name){
    console.log(`What is Your Good Name? My name is ${name}`);
    
})("Praneeth");
