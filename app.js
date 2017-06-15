const fs =require('fs');
const express=require('express');
var a=null;
var b=null;
var app=express();
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/scripts/index.js'));
app.get('/',(req,res)=>
{
	res.render('./index.html');
});
fs.appendFile('notes.txt',a,b);
app.listen(3000,()=>{
	console.log('started at 3000');
});