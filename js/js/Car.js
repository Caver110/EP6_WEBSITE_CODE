class Car {
    constructor(color, doors, make, model, fuel){
        this.color = color;
        this.doors = doors;
        this.make = make;
        this.model = model;
        this.fuel = fuel;
    }

    getColour(){
        return this.color;
    }
    
    getDoors(){
        return this.doors;
    }

    giveMePi(){
        return Math.PI;
    }

}