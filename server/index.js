const http = require('http').createServer();
const io = require('socket.io')(http,{
    cors:{origin:"*"}
})


io.on('connection',(socket)=>{
    console.log('a user connected ...!');
    socket.on('message',(message)=>{
        console.log("show message in server",message);
        io.emit('message',`${socket.id.substr(0,2)} said  ${message}`);
    })
})


http.listen(8080,()=>console.log('listning on http://localhost:8080'));


// const websocket = require('ws');
// const  server = new websocket.Server({port:8080});

// server.on('connection',socket=>{
//     socket.on('message',message=>{
//         socket.send(`Roger that...! ${message}`);
//     })
// })