/*
 * @Description: 创建型-抽象工厂模式
 * @Author: 5t5
 * @Time: 2024/4/10 17:22
 */

/**
 * GenericAbstractFactoryPattern 是一个通用的抽象工厂模式类。
 * 该类定义了创建不同类型汽车及其组件的方法，但并不具体实现这些方法。
 * 子类需要根据具体的汽车类型实现这些抽象方法。
 */
class GenericAbstractFactoryPattern {
    /**
     * 创建汽车的方法。这是一个抽象方法，需要在子类中实现。
     * @throws {Error} 抛出错误提示不能调用抽象方法，请子类自己实现。
     */
    createCar () {
        throw new Error('不能调用抽象方法，请自己实现')
    }
    
    /**
     * 创建发动机的方法。这是一个抽象方法，需要在子类中实现。
     * @throws {Error} 抛出错误提示不能调用抽象方法，请子类自己实现。
     */
    createEngine () {
        throw new Error('不能调用抽象方法，请自己实现')
    }
    
    /**
     * 创建车架的方法。这是一个抽象方法，需要在子类中实现。
     * @throws {Error} 抛出错误提示不能调用抽象方法，请子类自己实现。
     */
    createChassis () {
        throw new Error('不能调用抽象方法，请自己实现')
    }
    
    /**
     * 创建车身的方法。这是一个抽象方法，需要在子类中实现。
     * @throws {Error} 抛出错误提示不能调用抽象方法，请子类自己实现。
     */
    createBody () {
        throw new Error('不能调用抽象方法，请自己实现')
    }
    
    /**
     * 创建电气系统的方法。这是一个抽象方法，需要在子类中实现。
     * @throws {Error} 抛出错误提示不能调用抽象方法，请子类自己实现。
     */
    createElectrical () {
        throw new Error('不能调用抽象方法，请自己实现')
    }
    
    /**
     * 创建变速器的方法。这是一个抽象方法，需要在子类中实现。
     * @throws {Error} 抛出错误提示不能调用抽象方法，请子类自己实现。
     */
    createTransmission () {
        throw new Error('不能调用抽象方法，请自己实现')
    }
    
    /**
     * 创建汽车类型的抽象方法。子类需要根据具体的汽车类型实现该方法。
     * @throws {Error} 抛出错误提示不能调用抽象方法，请子类自己实现。
     */
    createType () {
        throw new Error('不能调用抽象方法，请自己实现')
    }
}


