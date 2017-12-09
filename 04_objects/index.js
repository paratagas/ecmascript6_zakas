/*let person = {
    name: "Nick",
    sayName() {
        console.log(this.name);
    }
};

person.sayName();*/

// -----
/*let receiver = {};
let supplier = {
    type: "js",
    name: "file.js"
};
let supplier2 = {
    type: "css"
};

Object.assign(receiver, supplier, supplier2);

console.log(receiver);*/

// -----
let person = {
    getGreeting() {
        return "Hello";
    }
};
let dog = {
    getGreeting() {
        return "Woof";
    }
};

let friend = Object.create(person);
console.log(friend.getGreeting());

console.log(Object.getPrototypeOf(friend) === person);

Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());
console.log(Object.getPrototypeOf(friend) === dog);
