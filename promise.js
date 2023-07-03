const pobj1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no)
        reject("Error while communicating")
    }, 2000);
});


const getBioData = (indexdata) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexdata) => {
            const biodata = {
                name: 'Arslan',
                age: 26
            }
            resolve('My roll no is ${rollno}. My name is ${biodata.name} ands I am ${biodata.age}. years old')
        })
    }, 2000, indexdata)
}

pobj1.then((rollno) => {
    console.log(rollno);
return getBioData(rollno[1]);
}).then((x)=>{
    console.log(x);
}).catch((error) => {
    console.log(error);
})
