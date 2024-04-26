async function getMessages() {
    const response = await fetch('https://kool.krister.ee/chat/TA23A')
    const messages = await response.json()
    console.log(messages)
    return messages
}
const chatContainer = document.querySelector(".chat-container")
async function populateMessages() {
    const messages = await getMessages()
    for(const mg of messages) {
        chatContainer.innerHTML = chatContainer.innerHTML + mg.name + ":" + '<p class="message user-a">' + mg.message + "</p>" 
    }
}

async function sendMessage(){
    const name = document.querySelector('#name').value
    console.log(name)
}

document.querySelector('#send').onclick = sendMessage

populateMessages()