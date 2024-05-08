/*
 * @Description: 怎么使用代理模式
 * @Author: 5t5
 * @Time: 2024/4/12 17:27
 */

import ProxyHandler from '../ProxyPattern'


// 定义一个目标对象
const target = {
    name: "Alice",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

// 使用代理类来创建代理对象
const handler = new ProxyHandler(target)

// 使用代理对象
console.log(handler.get('name')) // 获取 name 属性，拦截器将打印日志
handler.set('age', 30) // 设置 age 属性，拦截器将打印日志
handler.apply('greet') // 调用 greet 方法，拦截器将打印日志