// a user needs to be ableto send messages
// messages needs to be stored somewhere
// need to be ale to read individual messages

// classes start with a captial letter
//95% of the time are singular in name

//an arugment of a function is a value thatmust be provided to obtain the functions result.

/////////////////////////////////
/*
let inbox = []

class Message {
  constructor(content){
    this.content = content //this refers to wherever we are running the constructor function
    inbox.push(this)
  }
}

let msg1 = new Message('This is the first message')
let msg2 = new Message('This is the second message')

*/
//////////////////////////

// any object based on a class is called an instance
// an instance represents on object based on the class name

//the 'new' keyword and the constructor are tied together. 'This' is talking about an instance not the class itself


//user.inbox --> that person's messages
// user.sendMessage('Ryan', 'hello')

class User {
  constructor(name, inbox) {
    this.name = name
    this.inbox = []
    this.blockedUsers = []
    //each user has a new name and inbox
  }

  sendMessages(receiver, content){
    if (receiver.blockedUsers.includes(this)) return 'Your message count not be sent!'
    let msg = new Message (receiver, content)
    receiver.inbox.push(msg)
    return  `Your message to ${receiver.name} has been sent!`
    //user chooses what user to send the message to and gives you feed back if the message has been sent.
  }

  readMessage(i) {
    this.inbox[i].seen = true
    this.inbox[i].seenAt = new Date()
    return this.inbox[i].content
    //if the message has been read & seen, become 'true', give date seen, and return those variables to user's inbox
  }

  viewUnread() {
    let unread = []
    for (let msg of this.inbox){
      if (msg.seen === false) {
        unread.push(msg)
        console.log(msg.content)
      }
    }
    return unread
    // for loop not the best way to do this.
  }
  viewRead() {
    let read = []
    for (let msg of this.inbox){
      if (msg.seen === true) {
        read.push(msg)
        console.log(msg.content)
      }
    }
    return read
    // for loop not the best way to do this.
  }


  /////////////////////////
  readAll() {
    let msgRead = []
    for (let msg of this.inbox){
      if (msg.seen === false) {
        msgRead.push(msgRead)
        msg.seen = true

        console.log(msg.content)
      }
  }
  return msgRead
}

block(user){
  this.blockedUsers.push(user)
  }
}
  /////////////////////////


class Message {
  constructor(receiver, content){
    this.receiver = receiver
    this.content = content
    this.seen = false
    this.seenAt = null
  }
  //documents the receiver and the content of the message being sent, and tracks if the receiver user has seen it,read it, and at what time it has been seen.
}

let user1 = new User('Michael')
let user2 = new User('Ryan')
let user3 = new User('John')
let user4 = new User('David')
