/*
 * @Description: 怎么使用装饰器模式
 * @Author: 5t5
 * @Time: 2024/4/12 16:42
 */

import { SimpleCoffee, CoffeeDecorator } from '../DecoratorPattern'


// 牛奶装饰器
class MilkDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 1
    }
    
    getDescription() {
        return `${this.coffee.getDescription()}, Milk`
    }
}

// 糖装饰器
class SugarDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 0.5
    }
    
    getDescription() {
        return `${this.coffee.getDescription()}, Sugar`
    }
}

// 使用装饰器
let myCoffee = new SimpleCoffee() // 创建一个基本的咖啡对象
console.log(myCoffee.getDescription()) // 输出：Simple Coffee
console.log(myCoffee.getCost()) // 输出：5

myCoffee = new MilkDecorator(myCoffee) // 向咖啡中添加牛奶
console.log(myCoffee.getDescription()) // 输出：Simple Coffee, Milk
console.log(myCoffee.getCost()) // 输出：6

myCoffee = new SugarDecorator(myCoffee) // 向咖啡中添加糖
console.log(myCoffee.getDescription()) // 输出：Simple Coffee, Milk, Sugar
console.log(myCoffee.getCost()) // 输出：6.5