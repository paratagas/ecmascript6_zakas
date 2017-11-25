// -----
//console.log(String.fromCharCode(1072)); // a - the same for base language set
//console.log(String.fromCodePoint(1072)); // a - the same for base language set
//console.log(String.fromCharCode(134071)); // NOT the same for multilanguage set
//console.log(String.fromCodePoint(134071)); // NOT the same for multilanguage set

// -----
let text = String.fromCodePoint(134071);
console.log(text);
console.log(text.length);
console.log(/^.$/.test(text));
console.log(/^.$/u.test(text));
