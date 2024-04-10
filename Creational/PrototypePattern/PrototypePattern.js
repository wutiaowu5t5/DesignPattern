/*
 * @Description: 创建型-原型模式
 * @Author: 5t5
 * @Time: 2024/4/9 17:45
 */

class GenericPrototypePattern {
    constructor(properties) {
        Object.assign(this, properties) // 使用 Object.assign 进行属性复制
    }
    
    printProperties() {
        for (let prop of Object.keys(this)) { // 使用 Object.keys 获取所有可枚举属性
            console.log(`${prop}: ${this[prop]}`)
        }
    }
    
    clone() {
        // 创建一个新对象并进行浅拷贝
        return new GenericPrototypePattern({...this})
    }
}

export default GenericPrototypePattern