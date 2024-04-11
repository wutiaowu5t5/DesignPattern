/*
 * @Description: 抽象工厂子类-宝马子类
 * @Author: 5t5
 * @Time: 2024/4/10 18:06
 */

import GenericAbstractFactoryPattern from '../AbstractFactoryPattern'
import { Car, Chassis, Engine } from './BasicCarClass'

/**
 * BMWCar类，继承自Car类，代表一辆宝马汽车。
 * 该类通过构造函数初始化一辆宝马汽车的具体属性。
 */
class BMWCar extends Car {
    constructor(options) {
        super({ name: 'BMW', lights: 'LED', color: 'Black', ...options })
    }
}

class BMWEngine extends Engine {
    constructor(options) {
        super({ type: 'BMW Engine', horsepower: '300', ...options })
    }
}

class BMWChassis extends Chassis {
    constructor(options) {
        super({ material: 'Aluminum', type: 'BMW Chassis', ...options })
    }
}

/**
 * BMWSubclass类，继承自GenericAbstractFactoryPattern类。
 * 该类作为一个工厂类，用于创建宝马品牌的汽车、发动机和车架。
 */
class BMWSubclass extends GenericAbstractFactoryPattern {
    constructor(options) {
        super()
        this.options = options
    }
    /**
     * 创建一辆宝马汽车。
     * @returns {BMWCar} 返回一个BMWCar实例。
     */
    createCar () {
        if (this.options && this.options.carInfo) {
            return new BMWCar(this.options.carInfo)// 创建并返回一辆宝马汽车实例
        } else {
            throw new Error('未提供正确的汽车信息')
        }
    }
    
    /**
     * 创建一个宝马发动机。
     * @returns {BMWEngine} 返回一个BMWEngine实例。
     */
    createEngine () {
        return new BMWEngine() // 创建并返回一个宝马发动机实例
    }
    
    /**
     * 创建一个宝马车架。
     * @returns {BMWChassis} 返回一个BMWChassis实例。
     */
    createChassis () {
        return new BMWChassis() // 创建并返回一个宝马车架实例
    }
    
}

export default BMWSubclass