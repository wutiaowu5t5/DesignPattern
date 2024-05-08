/*
 * @Description: 行为型-模板方法模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:14
 */


class Beverage {
    prepareBeverage() {
        this.boilWater()
        this.brew()
        this.pourInCup()
        this.addCondiments()
    }
    
    boilWater() {
        console.log('煮水')
    }
    
    pourInCup() {
        console.log('倒入杯子')
    }
    
    brew() {
        throw new Error('子类必须实现brew方法')
    }
    
    addCondiments() {
        throw new Error('子类必须实现addCondiments方法')
    }
}

export default Beverage