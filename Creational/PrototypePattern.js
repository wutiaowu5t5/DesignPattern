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


// region HOW TO USE
// 使用原型模式创建新对象
const obj1 = new GenericPrototypePattern({name: 'Object 1', value: 10})
const obj2 = obj1.clone()

// 修改克隆后的对象的属性
obj2.name = 'Object 2'
obj2.color = 'blue'

// 调用通用方法
obj1.printProperties() // 输出: name: Object 1, value: 10
obj2.printProperties() // 输出: name: Object 2, value: 10, color: blue
// endregion HOW TO USE