// const Kingdom = {
//   king: {
//     knights: {
//       k1: {name:'Lancelot'},
//       k2: {name: 'Tristan'}
//       }
//     }
//   }
//
//   Kingdom.king.knights.k1.name = 'Gwenyvere'

// var Kingdom = {
//   name: 'Hyrule'
// }

// A class is a blueprint of schematic for a type of object
// class Kingdom {
//   constructor(x) { // constructor runs every time we invoke 'new' className
//     this.name = x
//   }
// }
// let kingdom = new Kingdom('Lumbridge')
//


const inbox = []
class Message {
  constructor(sender,content){
    this.sender = sender
    this.content = content
    inbox.push(this)
    // alert("You have a new message!")
    // INBOX.push(this)
  }
}

let sendBtn = document.getElementById('send-Btn')
let messageContent = document.querySelector('#msg-content')
let username = document.getElementById("username")
let form = document.getElementById('msg-form')

form.addEventListener('sumbit', (event) =>{
  event.preventDefault()
  window.location.href = './index.html'
})
// sendBtn.addEventListener('click', () => {
//   let msg = new Message (unsername.value, messageContent.value)
//   console.log(msg);
//   console.log(inbox);
//   messageContent.value = ''
//   alert("Your message was sent!")
// })
// var msg = new Message("This is a message from Michael")
