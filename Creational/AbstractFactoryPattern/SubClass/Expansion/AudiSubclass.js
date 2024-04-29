/*
 * @Description: 抽象工厂子类-奥迪
 * @Author: 5t5
 * @Time: 2024/4/10 18:06
*/

import GenericAbstractFactoryPattern from '../../AbstractFactoryPattern'
import { Car, Chassis, Engine } from '../Basic/BasicCarClass'

/**
 * AudiCar类，继承自Car类，代表一辆奥迪汽车。
 * 该类通过构造函数初始化一辆奥迪汽车的具体属性。
 * @param {Object} options 对象参数，用于初始化奥迪汽车的额外属性。
 * options 可以包含任意奥迪汽车特有的属性。
 */
class AudiCar extends Car {
    constructor(options) {
        super({ name: 'Audi', lights: 'LED', color: 'Black', ...options })
    }
}

/**
 * AudiEngine类，继承自Engine类，代表奥迪汽车的引擎。
 * 该类通过构造函数初始化奥迪汽车引擎的具体属性。
 * @param {Object} options 对象参数，用于初始化奥迪汽车引擎的额外属性。
 * options 可以包含任意奥迪引擎特有的属性。
 */
class AudiEngine extends Engine {
    constructor(options) {
        super({ type: 'Audi Engine', horsepower: '300', ...options })
    }
}

/**
 * AudiChassis类，继承自Chassis类，代表奥迪汽车的车架。
 * 该类通过构造函数初始化奥迪汽车车架的具体属性。
 * @param {Object} options 对象参数，用于初始化奥迪汽车车架的额外属性。
 * options 可以包含任意奥迪车架特有的属性。
 */
class AudiChassis extends Chassis {
    constructor(options) {
        super({ material: 'Aluminum', type: 'Audi Chassis', ...options })
    }
}


/**
 * AudiSubclass类，继承自GenericAbstractFactoryPattern类。
 * 该类作为一个工厂类，用于创建奥迪品牌的汽车、发动机和车架。
 */
class AudiSubclass extends GenericAbstractFactoryPattern {
    constructor(options) {
        super()
        this.options = options
    }
    /**
     * 创建一辆奥迪汽车。
     * @returns {AudiCar} 返回一个AudiCar实例。
     */
    createCar () {
        if (this.options && this.options.carInfo) {
            return new AudiCar(this.options.carInfo)// 创建并返回一辆奥迪汽车实例
        } else {
            throw new Error('未提供正确的汽车信息')
        }
    }
    
    /**
     * 创建一个奥迪发动机。
     * @returns {AudiEngine} 返回一个AudiEngine实例。
     */
    createEngine () {
        return new AudiEngine() // 创建并返回一个奥迪发动机实例
    }
    
    /**
     * 创建一个奥迪车架。
     * @returns {AudiChassis} 返回一个AudiChassis实例。
     */
    createChassis () {
        return new AudiChassis() // 创建并返回一个奥迪车架实例
    }
    
}

export default AudiSubclass