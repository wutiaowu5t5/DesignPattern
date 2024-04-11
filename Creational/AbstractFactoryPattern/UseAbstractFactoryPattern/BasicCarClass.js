/*
 * @Description: 汽车基础类
 * @Author: 5t5
 * @Time: 2024/4/10 18:27
 */

export class Car {
    constructor(options = {}) {
        Object.assign(this, options || {})
    }
    
    drive() {
        console.log('the name of the car that s driving right now is' + this.name)
    }
    
    stopDriving () {
        console.log('the name of the car that stopped' + this.name)
    }
}

export class Chassis {
    constructor(options = {}) {
        Object.assign(this, options || {})
    }
    
    assemble() {
        console.log(`The chassis made of ${this.material} and type ${this.type} is being assembled.`);
    }
}

export class Engine {
    constructor(options = {}) {
        Object.assign(this, options || {})
    }
    
    start() {
        console.log(`The ${this.type} engine with ${this.horsepower} horsepower is starting.`);
    }
}