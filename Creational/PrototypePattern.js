/*
 * @Description: 创建型-原型模式
 * @Author: 5t5
 * @Time: 2024/4/9 17:45
 */

class GenericPrototypePattern {
    constructor(properties) {
        for (let prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                this[prop] = properties[prop];
            }
        }
    }
    
    printProperties() {
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) {
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    }
    
    clone() {
        // 创建一个新的对象，将当前对象的属性复制到新对象上
        let clonedObject = new GenericPrototypePattern({});
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) {
                clonedObject[prop] = this[prop];
            }
        }
        return clonedObject;
    }
}

export default GenericPrototypePattern

// region HOW TO USE
// 使用原型模式创建新对象
//const obj1 = new GenericPrototypePattern({name: 'Object 1', value: 10});
//const obj2 = obj1.clone();

// 修改克隆后的对象的属性
//obj2.name = 'Object 2';
//obj2.color = 'blue';

// 调用通用方法
//obj1.printProperties(); // 输出: name: Object 1, value: 10
//obj2.printProperties(); // 输出: name: Object 2, value: 10, color: blue
// endregion HOW TO USE