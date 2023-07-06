fetch('https://api.covid19api.com/summary').then((apidata)=>{
    console.log(apidata)
    return apidata.json();
}).then((actualdata)=>{
    console.log(actualdata);
  const mydata = console.log(actualdata.Countries[101]);
  document.getElementById('fetched').innerHTML = mydata;
}).catch((error)=>{
    console.log(error)
})