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
    console.log('nuevo usr conectado');

    socket.on('send',(mes)=>{
        console.log(mes.txt);

       socket.broadcast.emit("respuesta",mes)
    })
})


http.listen(3000,()=>{
    console.log('escuchando puerto 3000');
})