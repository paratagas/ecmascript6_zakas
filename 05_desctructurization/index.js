// ----- Object
/*
let  node = {
    type: "Foo",
    name: "Bar"
};

let {type, name} = node;

console.log(node);
console.log(type);
console.log(name);*/

// -----
/*let  node = {
    type: "Foo",
    name: "Bar"
};

let type, name;

let result = ({type, name} = node);

console.log(result);*/
//console.log(node);
//console.log(type);
//console.log(name);

// -----
/*let  node = {
    type: "Foo",
    name: "Bar"
};

let {type: localType, name: localName} = node;

console.log(localType);
console.log(localName);*/

// -----
/*let  node = {
    type: "Foo"
    //name: "Bar"
};

let {type: localType, name: localName = "Bar"} = node;

console.log(localType);
console.log(localName);*/

// -----
/*let  node = {
    type: "Foo",
    name: "Bar",
    loc: {
        start: {
            line: 1,
            column: 2
        },
        end: {
            line: 3,
            column: 4
        }
    }
};

let {loc: {start, end}} = node;

console.log(start.line);
console.log(end.line);
console.log(start.column);
console.log(end.column);*/

// ----- Array
/*let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);*/

// -----
/*let colors = ["red", "green", "blue"];
let [ , , thirdColor] = colors;

console.log(thirdColor);*/

// -----
/*let a = 1;
 let b = 2;

 [a, b] = [b, a];

 console.log(a);
 console.log(b);*/

// -----
/*let colors = ["red", ["green", "lightgreen", ["supergreen"]], "blue"];
 let [firstColor, [secondColor, thirdColor, [superGreen]]] = colors;

 console.log(firstColor);
 console.log(secondColor);
 console.log(thirdColor);
 console.log(superGreen);*/

// -----
let fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
let citrus = fruits.slice();
let newFruits = fruits.concat();
let [...ES6Fruits] = fruits;

console.log(fruits);
console.log(citrus);
console.log(newFruits);
console.log(ES6Fruits);
console.log(fruits === citrus);
console.log(fruits === newFruits);
console.log(fruits === ES6Fruits);
