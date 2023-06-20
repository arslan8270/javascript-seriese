let range = {
    from: 1,
    to: 5
  };
  

  range[Symbol.iterator] = function() {
  
  
    return {
      current: this.from,
      last: this.to,
  
      
      next() {
        
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  

  for (let num of range) {
    alert(num); 
  }




  let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    alert(num);
  }

  let str = '𝒳😂';
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length);


  let str1 = '𝒳😂';
for (let char of str) {
    alert( char );
}



let str2 = "Hello";
let iterator = str2[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value);
}


function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
  }
  
  let str3 = '𝒳😂𩷶';
  
  alert( slice(str, 1, 3) );
    
  alert( str.slice(1, 3) );


