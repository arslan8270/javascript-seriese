console.log("This is log");
console.warn("This is warning");
console.error("This is an error");

var number1 = 34;
var number2 = 43;
console.log(number1 + number2);

//variables
//numbers                      
var num1 = 455;
var num2 = 322;

//string
var str1 = "this is string 1";
var str2 = "this is string 2";

//objects
var marks = {
    ravi: 34,
    shubam: 76,
    harry: 99.977
}
console.log(num1)
console.log(num2)

//objects
var a = true;
var b = false;
console.log(a)

//undefined
var und;
console.log(und);

//null
var n = null;
console.log(n);

var arr = [1, 2, "arslan", 4, 5];
console.log(arr[4]);

console.log(arr)

//Operators in Javascript

//Arithmetic operators
var a = 34;
var b = 56;

console.log("The addition of a and b is", a + b)
console.log("The substraction of a and b is", a - b)
console.log("The multiplication of a and b is", a * b)
console.log("The division a and b is", a / b)

//Arithmetic operators
var c = b;
console.log(c);

var x = 23;
var y = 43;

console.log(x == y);
console.log(x <= y);
console.log(x >= y);
console.log(x != y);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(!true);
console.log(!false)

function avg(a, b) {
    return (a + b) / 2;

}

c1 = avg(4, 6);
c2 = avg(14, 16);

console.log(c1, c2);

let age= 23;
if (age > 32) {
    console.log("You are not a kid")
}
else if (age > 26) {
    console.log("Bachy nhi rhy")
}
else if (age > 22) {
    console.log("Yes bachy nhi rhy")
}
else if (age > 18) {
    console.log("18 bachy nhi rhy")
}
else {
    console.log("Bachy rhy")
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr)
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (element) {
    console.log(element);
})

let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
    
}

do{
    console.log(arr[j])
}while(j<arr.length);


var t = 40;
{
    var t = 65;
    console.log(t);
}

console.log(t);















