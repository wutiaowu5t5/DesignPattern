/*
 * @Description: 怎么使用工厂模式
 * @Author: 5t5
 * @Time: 2024/4/10 18:12
 */

import GenericFactoryPattern from '../FactoryPattern'


// 使用工厂类创建对象
let person1 = GenericFactoryPattern.createPerson("Alice", 30)
let person2 = GenericFactoryPattern.createPerson("Bob", 25)

// 调用对象的方法
person1.greet() // 输出：Hello, my name is Alice, and I'm 30 years old.
person2.greet() // 输出：Hello, my name is Bob, and I'm 25 years old.