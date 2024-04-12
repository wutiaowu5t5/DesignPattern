/*
 * @Description: 结构型-装饰器模式
 * @Author: 5t5
 * @Time: 2024/4/12 16:42
 */

// 定义接口（或者抽象类）
class CoffeeInterface {
    getCost() {
        throw new Error("Method 'getCost()' must be implemented.")
    }
    
    getDescription() {
        throw new Error("Method 'getDescription()' must be implemented.")
    }
}

// 基本咖啡类
export class SimpleCoffee extends CoffeeInterface {
    getCost() {
        return 5
    }
    
    getDescription() {
        return "Simple Coffee"
    }
}

// 抽象装饰器类
export class CoffeeDecorator extends CoffeeInterface {
    constructor(coffee) {
        super()
        if (!(coffee instanceof CoffeeInterface)) {
            throw new Error("Decorator requires a CoffeeInterface instance.")
        }
        this.coffee = coffee
    }
}
