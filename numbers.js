let billion = 1e9;

alert( 7.3e9 );


alert( 0xff ); 
alert( 0xFF ); 

let a = 0b11111111; 
let b = 0o377; 

alert( a == b );


let num = 255;

alert( num.toString(16) );
alert( num.toString(2) ); 


alert( 123456..toString(36) );


let num2 = 1.23456;

alert( Math.round(num2 * 100) / 100 );

let num3 = 12.34;
alert( num3.toFixed(1) );

let num4 = 12.36;
alert( num4.toFixed(1) );


let num5 = 12.34;
alert( num5.toFixed(5) );


alert( 1e500 );

alert( 0.1 + 0.2 == 0.3 );

alert( 0.1.toFixed(20) );

let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); 

let sum1 = 0.1 + 0.2;
alert( +sum1.toFixed(2) );


alert( (0.1 * 10 + 0.2 * 10) / 10 );
alert( (0.28 * 100 + 0.14 * 100) / 100);

alert( isNaN(NaN) );
alert( isNaN("str") );

alert( NaN === NaN );


alert( isFinite("15") );
alert( isFinite("str") ); 
alert( isFinite(Infinity) );


alert( Number.isNaN(NaN) ); 
alert( Number.isNaN("str" / 2) ); 


alert( Number.isNaN("str") ); 
alert( isNaN("str") );


alert( Number.isFinite(123) ); 
alert( Number.isFinite(Infinity) ); 
alert( Number.isFinite(2 / 0) ); 


alert( Number.isFinite("123") ); 
alert( isFinite("123") );

alert( parseInt('100px') );
alert( parseFloat('12.5em') ); 

alert( parseInt('12.3') );
alert( parseFloat('12.3.4') )

alert( parseInt('a123') );

alert( Math.random() ); 
alert( Math.random() );
alert( Math.random() );

alert( Math.max(3, 5, -10, 0, 1) );
alert( Math.min(1, 2) );

alert( Math.pow(2, 10) );


let a4 = +prompt("Enter first number","");
let b4 = +prompt("Enter second number","");
alert(a4+b4);

alert((6.35).toFixed(1))

function readNumber(){
    let num;

    do{
        num = prompt("Enter a number please",0);
    }while(!isFinite(num));
    if(num === null || num === '')return null;
    return +num;
}

alert(`Read: ${readNumber()}`);

let i =0;
while(i<11){
    i+=0.2;
    if(i>9.8 && i<10.2) alert(i);
}

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );


  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }


