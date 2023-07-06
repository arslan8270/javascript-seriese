var http = new XMLHttpRequest();
var url = 'https://jsonplacehlder.typeicode.com/posts';
var method = 'Get';

http.open(method,url);
http.onreadyStatechange = function(){
    if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
        console.log(JSON.parse(http.responseText)[0].userId);

    }else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200)
    {
        console.log("Error")
    }

}

http.send();