function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Hello", "John");


  setTimeout("alert('Hello')", 1000);


  setTimeout(() => alert('Hello'), 1000);

  let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); 

clearTimeout(timerId);
alert(timerId);



let timerId1 = setInterval(() => alert('tick'), 2000);

setTimeout(() => { clearInterval(timerId1); alert('stop'); }, 5000);


let i = 1;
setInterval(function() {
  func(i++);
}, 100);


let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start);

  if (start + 100 < Date.now()) alert(times);
  else setTimeout(run);
});


function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(5, 10);



  let i1 = 0;

setTimeout(() => alert(i1), 100); 
for(let j = 0; j < 100000000; j++) {
  i++;
}