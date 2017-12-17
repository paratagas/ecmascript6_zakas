/*let promise = new Promise(function (resolve, reject) {
    console.log("Promise created"); // 1 in order
    resolve();
});

promise.then(function () {
    console.log("Resolved"); // 3 in order
});

console.log("Out of promise"); // 2 in order*/

// -----
/*let promise = new Promise(function (resolve, reject) {
    resolve(42);
});

promise
    .then(function (value) {
        console.log(value); // 42
        return value + 1;
    })
    .then(function (value) {
        console.log(value); // 43
    });*/

// -----
/*let p1 = new Promise(function (resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function (resolve, reject) {
    resolve(43);
});

let p3 = new Promise(function (resolve, reject) {
    resolve(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4
    .then(function (value) {
        console.log(Array.isArray(value)); // true
        console.log(value[0]); // 42
        console.log(value[1]); // 43
        console.log(value[2]); // 44
    });*/

// -----
/*let p1 = Promise.resolve(42);

let p2 = new Promise(function (resolve, reject) {
    resolve(43);
});

let p3 = new Promise(function (resolve, reject) {
    resolve(44);
});

let p4 = Promise.race([p1, p2, p3]);

p4
    .then(function (value) {
        console.log(value); // 42
    });*/

// -----
// custom promises
class MyPromise extends Promise {
    success(resolve, reject) {
        return this.then(resolve, reject);
    }

    failure(reject) {
        return this.catch(reject);
    }
}

let promise = new MyPromise(function (resolve, reject) {
    resolve(42);
});

promise
    .success(function (value) {
        console.log(value);
    })
    .failure(function (value) {
        console.log(value);
    });