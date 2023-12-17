const fs = require("fs")

//////////////////////////PROMISES////////////////////////////////

function pro(){
    return new Promise(function(resolve){
        fs.readFile("text.txt","utf-8",function(err,data){
            resolve(data)
        })
    })
}

function onDn(data){
    console.log(data)
}

pro().then(onDn)