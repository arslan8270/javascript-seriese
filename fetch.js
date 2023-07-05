fetch('https//api.covid19api.com/summary').then((apidata
)=>{
    console.log(apidata)
    return apidata.json();
})
.then((actualdata)=>{
    console.log(actualdata.Countriese[101].country);
})
.catch((error)=>{
    console.log(error);
})


let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json();

alert(commits[0].author.login);


fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));


  