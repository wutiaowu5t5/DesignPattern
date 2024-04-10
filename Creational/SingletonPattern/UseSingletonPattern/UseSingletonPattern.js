/*
 * @Description: 怎么使用单例模式
 * @Author: 5t5
 * @Time: 2024/4/10 18:12
 */

import GenericSingletonPattern from '../SingletonPattern'

// 获取单例对象的实例
const instance1 = GenericSingletonPattern.getInstance()
const instance2 = GenericSingletonPattern.getInstance()

// 检查是否是同一个实例
console.log(instance1 === instance2) // 输出: true
// 试图使用 new 关键字创建实例，会抛出错误
const instance3 = new GenericSingletonPattern() // 抛出错误: Cannot instantiate singleton class using new operator.