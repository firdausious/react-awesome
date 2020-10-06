
class Shape {
    constructor() {
        this.id = 'shape'
        this.x = 0
        this.y = 10
    }

    move(x, y){
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {

}

class Circle extends Shape {
    
}

class Eye extends Circle {

}

const shape = new Shape()
shape.move(10, 10)


