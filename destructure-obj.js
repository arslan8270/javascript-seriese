const bioData = {
    name: 'arslan',
    age :24,
    deg:'BS',

    hobb:{
        first:'playing',
        sec:'youtube videos'
    }
}

let {name, age, deg, hobb}= bioData;

console.log(`My name is ${name}. my age is ${age} and my degree is ${deg} and my hobby is ${hobb.sec}`);
