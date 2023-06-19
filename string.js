let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

alert(single)
alert(double)
alert(backticks)


function sum(a, b) {
    return a + b;
  }
  
  alert(`1 + 2 = ${sum(1, 2)}.`);


  let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList);


let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2);

alert( `The backslash: \\` );

alert( 'I\'m the Walrus!' );

alert( "I'm the Walrus!" );

alert( `My\n`.length );



let str ="Hello";
alert(str[0]);
alert(str.at(0));

alert(str[str.length-1]);
alert(str.at(-1));


let strr = `Hello`;

alert( strr[-2] );
alert( strr.at(-2) ); 

for (let char of "Hello") {
    alert(char);
  }


  let strrr = 'Hi';

strrr[0] = 'h'; 
alert( strrr[0] );


let strrrr = 'Hi';
strrrr = 'h'+str[1];
alert(strrrr);

alert( 'Interface'.toUpperCase() );
alert( 'Interface'.toLowerCase() );

alert( 'Interface'[0].toLowerCase() );


let strrrrr = 'Widget with id';

alert( strrrrr.indexOf('Widget') );
alert( strrrrr.indexOf('widget') ); 

alert( strrrrr.indexOf("id") );

let str3 = 'Widget with id';

alert( str3.indexOf('id', 2) )


let str4 = 'As sly as a fox, as strong as an ox';

let target = 'as';

let pos = 0;
while (true) {
  let foundPos = str4.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1;
}

let str6 = "As sly as a fox, as strong as an ox";
let target6 = "as";

let pos6 = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

alert( "Widget with id".includes("Widget") );

alert( "Hello".includes("Bye") );

alert( "Widget".includes("id") );
alert( "Widget".includes("id", 3) );

alert( "Widget".startsWith("Wid") );
alert( "Widget".endsWith("get") );

let str7 = "stringify";
alert( str7.slice(0, 5) );
alert( str7.slice(0, 1) );

let str8 = "stringify";
alert( str8.slice(2) );

let str9 = "stringify";
alert( str.slice(-4, -1) );



let str10 = "stringify";
alert( str10.substring(2, 6) );
alert( str10.substring(6, 2) );

alert( str10.slice(2, 6) );
alert( str10.slice(6, 2) ); 

let str11 = "stringify";
alert( str.substr(2, 4) ); 

let str12 = "stringify";
alert( str.substr(-4, 2) );

alert( 'a' > 'Z' );
alert( 'Österreich' > 'Zealand' );


alert( "Z".codePointAt(0) );
alert( "z".codePointAt(0) );
alert( "z".codePointAt(0).toString(16) );

alert( String.fromCodePoint(90) );
alert( String.fromCodePoint(0x5a) );let newStr = str[0].toUpperCase() + str.slice(1);

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('hello') || lowerStr.includes('hi');
}

alert( checkSpam('hello guys') );
alert( checkSpam('hi how are you') );
alert( checkSpam("innocent rabbit") );

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}