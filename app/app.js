const socket = io('ws://localhost:8080');

// receving 
socket.on('message',text=>{
    const el =document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
})

// send message
document.querySelector('button').onclick=()=>{
    const text  = document.querySelector('input').value;
    socket.emit('message',text);
}

// normal web sokckt but not for multiple cases
// const socket = new WebSocket('ws://localhost:8080');

// socket.onmessage=({data})=>{
//     console.log("Message from server ", data)
// }

// document.querySelector('button').onclick=()=>{
//     socket.hello("hello");
// }