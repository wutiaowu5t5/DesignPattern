/*
 * @Description: 行为型-模板方法模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:14
 */

/**
 * Beverage类，表示一个饮料的制作过程。这个基类定义了基本步骤，
 * 包括煮水、冲泡、倒入杯子和添加调料。子类需要覆盖brew和addCondiments方法
 * 来实现具体的饮料制作逻辑。
 */
class Beverage {
    /**
     * prepareBeverage方法，执行饮品的制作流程。
     * 此方法调用了一系列抽象方法来完成整个制作过程。
     */
    prepareBeverage() {
        this.boilWater()
        this.brew()
        this.pourInCup()
        this.addCondiments()
    }
    
    /**
     * boilWater方法，模拟煮水的过程，并打印相关信息到控制台。
     */
    boilWater() {
        console.log('煮水')
    }
    
    /**
     * pourInCup方法，将煮好的水倒入杯子中。
     * 这是一个抽象方法，由子类具体实现。
     */
    pourInCup() {
        console.log('倒入杯子')
    }
    
    /**
     * brew方法，执行冲泡饮料的操作。
     * 这是一个抽象方法，需要子类根据具体饮料类型实现。
     *
     * @abstract
     */
    brew() {
        throw new Error('子类必须实现brew方法')
    }
    
    /**
     * addCondiments方法，向饮品中添加调料或附加物。
     * 这是一个抽象方法，需要子类根据具体饮料类型实现。
     *
     * @abstract
     */
    addCondiments() {
        throw new Error('子类必须实现addCondiments方法')
    }
}

export default Beverage
