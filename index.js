console.log("Hello Node js")

// const math=require("./math")
// console.log(math);

// const url=require("./http")
// console.log(url);

// const file=require("./file")
// console.log(file);


// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// console.log(http);
// console.log(dt);


//modules

// const os= require("os")
// // console.log(os)
// console.log(os.type())
// console.log(os.version())
// console.log(os.freemem())
// console.log(os.cpus())

// const path=require("path")
// console.log(path.dirname("file path is " + __filename))

//fs modules
const fs=require("fs")

fs.readFile("demo.txt" , 'utf8', (err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})


fs.writeFile('fsWriteFile.html','utf8', (err)=>{
    if(err){
        console.log(err)
    }
    console.log("create file succussfully")

})

fs.rename('fsWriteFile.html','fsWriteFile.js',(err)=>{
    if(err){
        console.log(err)
    }
    console.log("rename successfully")
})


fs.unlink('fsWriteFile.js',(err)=>{
    if(err){
        console.log(err)
    }
    console.log("delete successfully")
})



// http server modules
const http=require('http')

const myServer= http.createServer((request,response)=>{
    response.write("Welcome to Server")
    response.end()
})

myServer.listen(5500)



// Local Modules

const {addNumber,subNumber,mutNumber,divNumber,moduloNumber}=require('./localmodules')
console.log("Total adding number is " + addNumber(10,5))
console.log("Total sub number is " +subNumber(10,5))
console.log("Total multple number is " + mutNumber(10,5))
console.log("Total div number is " +divNumber(10,5))
console.log("Total mudulo number is " +moduloNumber(10,5))
