let map = new Map();

map.set('1', 'str1');  
map.set(1, 'num1');    
map.set(true, 'bool1');


alert( map.get(1)   );
alert( map.get('1') ); 

alert( map.size ); 


let john = { name: "John" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
alert( visitsCountMap.get(john) );




let john1 = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {};

visitsCountObj[ben] = 234;
visitsCountObj[john1] = 123;


alert( visitsCountObj["[object Object]"] );


function unique(arr) {
    return Array.from(new Set(arr));
  }

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );


let sorted = word
  .toLowerCase()
  .split('')
  .sort() 
  .join('');


  map.set(sorted, word);




  function aclean(arr1) {
    let obj1 = {};
  
    for (let i = 0; i < arr1.length; i++) {
      let sorted = arr1[i].toLowerCase().split("").sort().join("");
      obj1[sorted] = arr1[i];
    }
  
    return Object.values(obj1);
  }
  
  let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr1) );



let map1 = new Map();

map1.set("name", "John");

let keys = Array.from(map1.keys());

keys.push("more");

alert(keys);



let map2 = new Map();

map2.set("name", "John");

let keys2 = Array.from(map2.keys());

keys.push("more");

alert(keys2);



let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");
weakMap.set("test", "Whoops");

