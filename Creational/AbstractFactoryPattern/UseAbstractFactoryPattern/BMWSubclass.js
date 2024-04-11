/*
 * @Description: 抽象工厂子类-宝马子类
 * @Author: 5t5
 * @Time: 2024/4/10 18:06
 */

import GenericAbstractFactoryPattern from '../AbstractFactoryPattern'
import { Car, Chassis, Engine } from './BasicCarClass'


/**
 * BMWCar 类，继承自 Car 类。
 * 用于创建具有 BMW 特性的汽车实例。
 * @param {Object} options - 用于初始化 BMWCar 实例的选项对象。
 * options 可以包含任何自定义属性，但至少需要包含 name, lights, color 等预定义属性。
 */
class BMWCar extends Car {
    constructor(options) {
        super({ name: 'BMW', lights: 'LED', color: 'Black', ...options })
    }
}

/**
 * BMWEngine 类，继承自 Engine 类。
 * 用于创建具有 BMW 引擎特性的引擎实例。
 * @param {Object} options - 用于初始化 BMWEngine 实例的选项对象。
 * options 可以包含任何自定义属性，但至少需要包含 type, horsepower 等预定义属性。
 */
class BMWEngine extends Engine {
    constructor(options) {
        super({ type: 'BMW Engine', horsepower: '300', ...options })
    }
}

/**
 * BMWChassis 类，继承自 Chassis 类。
 * 用于创建具有 BMW 底盘特性的底盘实例。
 * @param {Object} options - 用于初始化 BMWChassis 实例的选项对象。
 * options 可以包含任何自定义属性，但至少需要包含 material, type 等预定义属性。
 */
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