let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null;
alert(john)


let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");

weakMap.set("test", "Whoops");



let john1 = { name: "John" };

let weakMap1 = new WeakMap();
weakMap.set(john, "...");

john = null;


let visitsCountMap = new Map();

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}


let john2 = { name: "John" };

countUser(john2);
john2 = null;


let visitsCountMap1 = new WeakMap();
function countUser(user) {
  let count = visitsCountMap1.get(user) || 0;
  visitsCountMap1.set(user, count + 1);
}



let cache = new Map();

function process(obj) {
  if (!cache.has(obj)) {
    let result =  obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}


let obj1 = {};

let result1 = process(obj1);
let result2 = process(obj1);
obj = null;

alert(cache.size); 



let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
  readMap.set(messages[0], new Date(2023, 6, 21));
