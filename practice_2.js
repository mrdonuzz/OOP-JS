class Point{
    constructor(x, y){
        this.x = x
        this.y = y
        this.toString()
    }
    toString(){
        console.log(`x = ${this.x}, y = ${this.y}`)
    }
}

const point1 = new Point(1, 2)
const point2 = new Point(2, 3)