let form = document.querySelector('form')

form.addEventListener('submit', async (e) => { 
    e.preventDefault()


    //make a fetch call with a payload
    //name, title, message
    let newMessage = {
        name: document.querySelector('#feedback-form-name').value,
        title: document.querySelector('#feedback-form-title').value,
        message:document.querySelector('#feedback-form-message').value,
    }

    //reconfigure fetch to accept a post and a payload
    let result = await fetch('/api', {
        method: "post",
        headers: {'Content-type':  'application/json; charset=UTF-8'},
        body: JSON.stringify(newMessage)
    })

    let data = await result.json()
    console.log("data:", data)

    //display messaes on the screen
    updateFeedback(data)
    

    //clear the form
    document.querySelector('#feedback-form-name').value = ""
    document.querySelector('#feedback-form-title').value = ""
    document.querySelector('#feedback-form-message').value = ""


    //!add delete feature when creating each new message
    let deleteBtn = document.querySelectorAll('.feedback-delete')
    deleteBtn.forEach(deleteSpan => {
       console.log(deleteSpan)
       deleteSpan.addEventListener('click', () => { 
           clickedMessageIndex = deleteSpan.querySelector('span').getAttribute('id')

           deleteMessage(clickedMessageIndex)
        })
    })
   
    
 })



 const updateFeedback = (messagesArray) => {
    let htmlBlock = ''
    messagesArray.forEach((item, index) => {
        htmlBlock += '     <div class="feedback-item item-list media-list">';
        htmlBlock += '       <div class="feedback-item media">';
        htmlBlock += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + index + '" class="glyphicon glyphicon-remove"></span></button></div>';
        htmlBlock += '         <div class="feedback-info media-body">';
        htmlBlock += '           <div class="feedback-head">';
        htmlBlock += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
        htmlBlock += '           </div>';
        htmlBlock += '           <div class="feedback-message">' + item.message + '</div>';
        htmlBlock += '         </div>'; 
        htmlBlock += '       </div>';
        htmlBlock += '     </div>';
    })

    //attach it to the dom
    let feedbackDOM = document.querySelector('.feedback-messages')
    feedbackDOM.innerHTML = htmlBlock
 }

let clickedMessageIndex
const displayCurrentMessages = async () => {
    try {
        let result = await fetch('/api')
        let messages = await result.json()
    
        updateFeedback(messages)

        //!delete a message 
        let deleteBtn = document.querySelectorAll('.feedback-delete')
        deleteBtn.forEach(deleteSpan => {
           console.log(deleteSpan)
           deleteSpan.addEventListener('click', () => { 
               clickedMessageIndex = deleteSpan.querySelector('span').getAttribute('id')

               deleteMessage(clickedMessageIndex)
            })
        })
    } catch (error) {
        console.log(error)
    }
   
 }

 displayCurrentMessages()


 //!delete a message function 
 const deleteMessage = async (index) => {
    let obj = { index: index}
    try {
        console.log("insdie delete")
        let feedbackResult = await fetch('/api')
        let messages = await feedbackResult.json()
        console.log(messages)
        // let deleteMessageObj = messages[index]
       
        let result = await fetch(`/api/${index}`, {
            method: "delete",
            body: JSON.stringify(obj)
            
        })

        let data = await result.json()
        console.log(data)


        await displayCurrentMessages()
    } catch (error) {
        console.log(error)
    }
    
 }