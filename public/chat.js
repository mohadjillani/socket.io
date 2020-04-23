const socket=io.connect('http://localhost:4000/');
// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback=document.getElementById('feedback');

//Emit events

btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});
message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value);
})
//listen for events

socket.on('chat',(data)=>{
    output.innerHTML +='<p><strong>'+data.handle +':</strong>'+ data.message +'</p>';
});

socket.on('typing',(data)=>{
    feedback.innerHTML ='<p><em>'+data+' is typing...</em></p>';
});