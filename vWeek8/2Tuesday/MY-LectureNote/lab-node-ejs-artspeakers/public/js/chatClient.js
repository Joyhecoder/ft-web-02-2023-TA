//grab username, message out of dom
let chatUserName = document.querySelector('#chat-username')
let chatMessage = document.querySelector('#chat-message')
let chatForm = document.querySelector('form')

//connect socket.io
const socket = io('http://localhost:3000')

//emitting a message
// socket.on('connection', () => { 
//     socket.on('chatMessage', (msg) => { 
//         console.log(msg)
//      })
//  })
socket.on('chatMessage', (msg) => { 
    console.log(msg)
})


    
    chatForm.addEventListener('submit', e => {
        e.preventDefault()
    
       

        console.log("test 20")
        //sending messge out to our node server
        socket.emit('postMessage', {
            username:chatUserName.value,
            message: chatMessage.value
        })
        chatMessage.value = ""

        //focus the cursor
        chatMessage.focus()
    })

        //receiving a braodcast
        socket.on("updateMessages", (data) => { 
            console.log(data) //{username: , message: ,}
            console.log("test 34")
            showMessage(data)
         })

         

    
 //end of our sokcet connection

 const showMessage = (data) => {
    let chatDisplay = document.querySelector('.chat-display')
    let newMessage = document.createElement('p')


    //change the text color to differentiate user/chatter
    if(chatUserName.value == data.username){
        newMessage.className = "bg-success chat-text"
    }else{
        newMessage.className = "bg-info text-warning chat-text"
    }
    
    newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`

    //insert the new message before
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild)
 }