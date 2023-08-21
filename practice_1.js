//Classes For Fetching Information on a Sports Player

class Player{
    name = "Avatar"
    age = 0
    height = 0
    weight = 0
    constructor(name, age, height, weight){
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.getAge()
        this.getHeight()
        this.getWeight()
    }
    getAge(){
        console.log(`${this.name} is age ${this.age}`)
    }
    getHeight(){
        console.log(`${this.name} is ${this.height}cm`)
    }
    getWeight(){
        console.log(`${this.name} weight ${this.weight}kg\n`)
    }
}

const p1 = new Player("David Jones", 25, 175, 75)
const p2 = new Player("Donuzz Chocolate", 29, 176, 85)