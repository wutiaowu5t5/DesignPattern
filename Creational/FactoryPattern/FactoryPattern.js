/*
 * @Description: 创建型-工厂模式
 * @Author: 5t5
 * @Time: 2024/4/10 11:01
 */


/**
 * 表示一个人的类
 * @class Person
 * @param {string} name - 人的名字
 * @param {number} age - 人的年龄
 */
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    
    /**
     * 向他人打招呼并介绍自己
     */
    greet() {
        console.log("Hello, my name is " + this.name + ", and I'm " + this.age + " years old.")
    }
}

/**
 * 通用工厂模式类，用于创建Person实例
 * @class GenericFactoryPattern
 */
class GenericFactoryPattern {
    
    /**
     * 创建一个Person实例
     * @static
     * @param {string} name - 人的名字
     * @param {number} age - 人的年龄
     * @returns {Person} 返回一个初始化后的Person实例
     * @throws {Error} 如果名字不是字符串或年龄不是正数，则抛出错误
     */
    static createPerson(name, age) {
        
        // 验证输入参数的合法性
        if (typeof name !== 'string') {
            throw new Error('Invalid input: "name" parameter must be a string.')
        }
        if (typeof age !== 'number' || isNaN(age) || age <= 0) {
            throw new Error('Invalid input: "age" parameter must be a positive number.')
        }
        
        // 创建并返回Person实例
        return new Person(name, age)
    }
}

export default GenericFactoryPattern