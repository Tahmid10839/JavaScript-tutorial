
let a = document;
console.log(a);
console.log(typeof a);

let b = document.all;
console.log(b);

let c = document.body;
console.log(c);

let f = document.forms;
console.log(f);

Array.from(b).forEach(function(element,index,array){
    console.log(element,index,array);
});

let d = document.links;
console.log(d);
let g = document.links[0];
console.log(g);
let e = document.links[0].href;
console.log(e);

let i = document.images[0];
console.log(i);

let s = document.scripts[0];
console.log(s);
