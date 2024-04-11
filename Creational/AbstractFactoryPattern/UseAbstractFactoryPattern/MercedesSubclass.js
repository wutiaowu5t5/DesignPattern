/*
 * @Description: 抽象工厂子类-奔驰子类
 * @Author: 5t5
 * @Time: 2024/4/10 18:08
 */

import GenericAbstractFactoryPattern from '../AbstractFactoryPattern'
import { Car, Chassis, Engine } from './BasicCarClass'

/**
 * MercedesCar类，继承自Car类，代表一辆梅赛德斯奔驰汽车。
 * 该类通过构造函数初始化一辆梅赛德斯奔驰汽车的具体属性。
 */
class MercedesCar extends Car {
    constructor(options) {
        super({ name: 'Mercedes', lights: 'LED', color: 'Black', ...options })
    }
}

class MercedesEngine extends Engine {
    constructor(options) {
        super({ type: 'Mercedes Engine', horsepower: '300', ...options })
    }
}

class MercedesChassis extends Chassis {
    constructor(options) {
        super({ material: 'Aluminum', type: 'Mercedes Chassis', ...options })
    }
}

/**
 * MercedesSubclass类，继承自GenericAbstractFactoryPattern类。
 * 该类作为一个工厂类，用于创建梅赛德斯奔驰品牌的汽车、发动机和车架。
 */
class MercedesSubclass extends GenericAbstractFactoryPattern {
    constructor(options) {
        super()
        this.options = options
    }
    /**
     * 创建一辆梅赛德斯奔驰汽车。
     * @returns {MercedesCar} 返回一个MercedesCar实例。
     */
    createCar () {
        if (this.options && this.options.carInfo) {
            return new MercedesCar(this.options.carInfo)// 创建并返回一辆梅赛德斯奔驰汽车实例
        } else {
            throw new Error('未提供正确的汽车信息')
        }
    }
    
    /**
     * 创建一个梅赛德斯奔驰发动机。
     * @returns {MercedesEngine} 返回一个MercedesEngine实例。
     */
    createEngine () {
        return new MercedesEngine() // 创建并返回一个梅赛德斯奔驰发动机实例
    }
    
    /**
     * 创建一个梅赛德斯奔驰车架。
     * @returns {MercedesChassis} 返回一个MercedesChassis实例。
     */
    createChassis () {
        return new MercedesChassis() // 创建并返回一个梅赛德斯奔驰车架实例
    }
    
}

export default MercedesSubclass