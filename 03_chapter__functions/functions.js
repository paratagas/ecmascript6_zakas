/*function makeRequest(first, second = "two", third="three") {
    console.log(first);
    console.log(second);
    console.log(third);
}

//makeRequest();
makeRequest("one", undefined, "new");*/

// -----
/*function func(param1, ...rest) {
    console.log(`param1 is ${param1}`);
    console.log(rest);
}

func("one", "two", "three");*/

// -----

/*
let func = () => {
    //
};

let obj = new func(); // Type Error*/

// -----
/*function one() {
    console.log(this);
    function two() {
        console.log(this);
    }

    two();
}
one();*/


// -----
/*let func = () => {
    console.log(this);
    console.log(arguments);
};

func();*/

// -----
//let func = id => ({id: id, name: "Temp"});
/*
let func = id => {
    return {
        id: id,
        name: "Temp"
    };
};

console.log(func(10));*/

// -----
function func(arg) {
    let arrFunc = (() => {
        console.log(arguments[0]);
    })();
}

func("myArg");
