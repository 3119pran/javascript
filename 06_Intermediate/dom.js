const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><ul class="lang"></ul>`);
const document = dom.window.document;


function langadd(langname) {
    const li = document.createElement('li');
    li.innerHTML = `${langname}`;
    const langContainer = document.querySelector(".lang");

    if (langContainer) {
        langContainer.appendChild(li);
        console.log(`${langname} added successfully`);
    } else {
        console.error("No element with class 'lang' found in the document.");
    }
}

langadd("python");

// const li=document.createElement('li');
// li.appendChild(document.createTextNode(langnae));
//document.querySelector(".language").appendChild(li)
//Edit
const sec=document.querySelector("li:nth-child(1)");
const li=document.createElement('li');
li.textContent="Mojo";
sec.replaceWith(li);

console.log(document.querySelector("ul"));
