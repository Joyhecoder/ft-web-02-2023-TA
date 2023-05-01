// core modules

const fs = require('fs') //core node module that allows us to read and write  to file system

const express = require('express');
//*write a file
let fileName = "sample.txt"
let content = "Node is pretty awesome"
fs.writeFile(fileName, content, (err)=>{
    if(err){
        console.log(err.message)
    }
    console.log(`File saved at ${fileName}`)
})


//*read file
fs.readFile('preamble.txt', (err, bufferedData)=>{
    if(err){
        console.log(err.message)
        return
    }

    // console.log(`File Data: ${bufferedData}`)

    let data = bufferedData.toString().split(" ")
    // for(let word of data){
    //     // console.log(word)
    // }

    let starData = data.join('*')
    console.log(starData)
})