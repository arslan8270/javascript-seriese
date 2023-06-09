let admin;
let name = "johan";
admin = name;
alert(admin);

let our_planet = "earth";
let new_visitor = "root";

alert(1/0)

alert(Infinity)

alert("not a number"/2)

alert(NaN + 1);

alert(NaN ** 0);

    
let isGreater = 4>1;
alert(isGreater);

let age = null;
alert(age)

let a;
alert(a);

let b =100;
b = undefined;
alert(b);

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


let name1 = "Ilya";
alert(`hello $(1)`);
alert(`hello $("name1")`);
alert(`hello $(name1)`)

