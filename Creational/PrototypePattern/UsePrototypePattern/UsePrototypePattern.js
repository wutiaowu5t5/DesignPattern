/*
 * @Description: 怎么使用原型模式
 * @Author: 5t5
 * @Time: 2024/4/10 18:12
 */

import GenericPrototypePattern from '../PrototypePattern'


// 使用原型模式创建新对象
const obj1 = new GenericPrototypePattern({name: 'Object 1', value: 10})
const obj2 = obj1.clone()

// 修改克隆后的对象的属性
obj2.name = 'Object 2'
obj2.color = 'blue'

// 调用通用方法
obj1.printProperties() // 输出: name: Object 1, value: 10
obj2.printProperties() // 输出: name: Object 2, value: 10, color: blue
