class Unit {
  constructor(name){
    this.name = name
    this.hp = 100
    this.atk = 10
    this.mag = 5
    this.job = "Squire"
    this.alive = true
    this.equipment = {
      rHand: null,
      lHand: null,
      helmet: null,
      armor: null,
      accessory: null
    }
     // these are properties
    //make equipment an object and in that object have different types of equipments
  }

  equipItem(item) {
    if (item.type != 'hand') {
      this.equipment[item.type] = item

    }
    return `${item.name} has been equipped!`
  }

  attack(target) {
    if (!target.alive) return `${target.name} has already fallen!`
    target.hp -= this.atk
    if (target.hp <=0) {
      target.alive = false
      return ` ${target.name} has fallen!`
    }
    return `${this.name} attacked ${target.name}!`
  }
}

class Squire extends Unit {
  constructor(name) {
    super(name)

  }

  attack() {

  }
}
class Knight extends Unit{ // the Knight class will inherit from Unit class
  constructor(name) {
    super(name)
    this.atk += 10
    this.job = "Knight"
  }
}

class Mage extends Unit {
  constructor(name){
    super(name)
    this.hp -= 25
    this.mag += 25
    this.job = "Mage"
  }

  castSpell(target) {
    if (!target.alive) return `${target.name} has already fallen!`
    target.hp -= this.mag
    if (target.hp <=0) {
      target.alive = false
      return ` ${target.name} has fallen!`
    }
    return `${this.name} cast fire on ${target.name}!`
  }
}


let knight = new Knight('Michael')
let squire = new Squire('Jonny')
let mage = new Mage('Weevil')



// let ATKButton = document.getElementById('atkBtn')
//
// ATKButton.addEventListener('click', function() {
//     console.log(mage.castSpell(knight))
//     console.log('Knight has',knight.hp,'hp left')
//   })
