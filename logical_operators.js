alert(true || true);   // true
alert(false || true);  // true
alert(true || false);  // true
alert(false || false); // false

if (1 || 0) { // works just like if( true || false )
    alert('truthy!');
}


let hour = 9;

if (hour < 10 || hour > 18) {
    alert('The office is closed.');
}

let hours = 12;
let isWeekend = true;
if (hours < 10 || hours > 18 || isWeekend) {
    alert('The office is close')
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous");

alert(true && true);
alert(false && true);
alert(true && false);
alert(false && false);


if (1 && 1) {
    alert("won't work, because the result is falsy");
}

alert(1 && 0);
alert(1 && 5);


alert(null && 5);
alert(0 && "no matter what");

let x = 1;

(x > 0), alert('Greater than zero!');

alert(null || 2 || undefined);

alert(1 && null && 2);

alert(alert(1) && alert(2));

let age = prompt('Enter your age', '')
if (age >= 14 && age <= 90) {
    alert('You are allowed');
}
else {
    alert('You are not allowed');
}

let age1 = prompt('Enter the age')

if (!(age1 >= 14 && age1 <= 90)) {
    alert('tum abi bachy ho')
}
else {
    alert('tum bachy nhi rhy')
}


if (-1 || 0) alert('First');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');


let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}