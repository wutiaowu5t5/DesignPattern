/*
 * @Description: 创建型-建造者模式
 * @Author: 5t5
 * @Time: 2024/4/11 15:46
 */
class Car {
    constructor(make, model, color) {
        this.make = make
        this.model = model
        this.color = color
        // 更多属性...
    }
    
    // ... 其他方法 ...
}

class CarBuilder {
    constructor() {
        this.car = new Car()
    }
    
    setMake(make) {
        this.car.make = make
        return this
    }
    
    setModel(model) {
        this.car.model = model
        return this
    }
    
    setColor(color) {
        this.car.color = color
        return this
    }
    
    // ... 其他设置方法 ...
    
    build() {
        return this.car
    }
}

export default CarBuilder