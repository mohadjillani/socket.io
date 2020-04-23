const express=require('express');
const socket=require('socket.io');
//app setup

const app = express();
const server=app.listen(4000,()=>console.log("listening on port 4000"))

//Static file
app.use(express.static('public'));

//Setup websockets.io

const io=socket(server);
io.on('connection',(socket)=>{
    console.log("socket connected");
    socket.on('chat',(data)=>io.sockets.emit('chat',data));
    socket.on('typing',(data)=>socket.broadcast.emit('typing',data));
});
