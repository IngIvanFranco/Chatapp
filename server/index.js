const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors:{
        origin:true,
        credentials:true,
        methods:["GET","POST"]
    }
})

io.on('connection',(socket)=>{
   

    socket.on('send',(mes)=>{
        console.log(mes.txt);

       socket.broadcast.emit("respuesta",mes)
    })

    socket.on('avisarinicio',(datos)=>{
console.log(`${datos.username} ha iniciado sesion`);
socket.broadcast.emit('infosesion',datos)
    })
})


http.listen(3000,()=>{
    console.log('escuchando puerto 3000');
})