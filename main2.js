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

  }

  sendMessages(receiver, content){
    let msg = new Message (receiver, content)
    receiver.inbox.push(msg)
    return  `Your message to ${receiver.name} has been sent!`
  }

  readMessage(i) {
    return this.inbox[i].content
  }
}

class Message {
  constructor(receiver, content){
    this.receiver = receiver
    this.content = content

  }
}

let user1 = new User('Michael')
let user2 = new User('Ryan')
