/*class PersonClass {
    constructor(name) {
        this.name = name;
        this.prop = "default";
    }

    sayName() {
        console.log(this.name);
    }

    get html() {
        return this.prop;
    }

    set html(value) {
        this.prop = value;
    }

    static bark() {
        console.log("bark!");
    }

    //static classProp = "classProp"; // SyntaxError: Unexpected token =
}

let person = new PersonClass("Nick");
person.sayName(); // "Nick"
console.log(person.prop); // default
person.prop = "new prop";
console.log(person.prop); // new prop
// person.bark(); // TypeError: person.bark is not a function
PersonClass.bark(); // bark!
console.log(PersonClass.name); // "PersonClass"*/

// -----
class One {
    constructor() {
        //console.log(new.target);
    }
    myFunc() {
        console.log("One");
    }

    static bark() {
        console.log("bark!");
    }
}

class Two extends One {
    myFunc() {
        console.log("Two");
    }
}

class Three extends Two {
    myFunc() {
        super.myFunc();
    }
}

let one = new One();
let two = new Two();
let three = new Three();

one.myFunc(); // One
two.myFunc(); // Two
three.myFunc(); // Two
Three.bark(); // bark! - from parent class
