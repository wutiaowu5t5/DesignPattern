/*
 * @Description: 汽车基础类
 * @Author: 5t5
 * @Time: 2024/4/10 18:27
 */

/**
 * 表示一辆汽车的类
 * @constructor
 * @param {Object} options - 用于初始化汽车属性的选项对象，默认为空对象。
 */
export class Car {
    constructor(options = {}) {
        Object.assign(this, options || {}) // 将传入的选项对象合并到当前实例上
    }
    
    /**
     * 开车操作
     * 在控制台打印当前驾驶的汽车名字
     */
    drive() {
        console.log('the name of the car that s driving right now is' + this.name)
    }
    
    /**
     * 停止驾驶操作
     * 在控制台打印停止驾驶的汽车名字
     */
    stopDriving () {
        console.log('the name of the car that stopped' + this.name)
    }
}

/**
 * 表示车架的类
 * @constructor
 * @param {Object} options - 用于初始化车架属性的选项对象，默认为空对象。
 */
export class Chassis {
    constructor(options = {}) {
        Object.assign(this, options || {}) // 将传入的选项对象合并到当前实例上
    }
    
    /**
     * 组装车架操作
     * 在控制台打印车架的材质和类型信息
     */
    assemble() {
        console.log(`The chassis made of ${this.material} and type ${this.type} is being assembled.`);
    }
}

/**
 * 表示发动机的类
 * @constructor
 * @param {Object} options - 用于初始化发动机属性的选项对象，默认为空对象。
 */
export class Engine {
    constructor(options = {}) {
        Object.assign(this, options || {}) // 将传入的选项对象合并到当前实例上
    }
    
    /**
     * 发动机启动操作
     * 在控制台打印发动机的类型和马力信息
     */
    start() {
        console.log(`The ${this.type} engine with ${this.horsepower} horsepower is starting.`);
    }
}
