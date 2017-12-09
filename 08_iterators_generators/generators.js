/*function *createIterator() {
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3;
}

let iterator = createIterator();
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next(4)); // {value: 6, done: false}
console.log(iterator.next(5)); // {value: 8, done: false}
console.log(iterator.next()); // {value: undefined, done: true}*/

// -----
// delegate generators

function *createNumberIterator() {
    yield 1;
    yield 2;
}

function *createColorIterator() {
    yield "red";
    yield "green";
}

function *createCombinedIterator() {
    yield *createNumberIterator();
    yield *createColorIterator();
    yield true;
}

let iterator = createCombinedIterator();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: "red", done: false}
console.log(iterator.next()); // {value: "green", done: false}
console.log(iterator.next()); // {value: true, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
