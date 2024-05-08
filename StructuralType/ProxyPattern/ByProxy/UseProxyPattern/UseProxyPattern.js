/*
 * @Description: 怎么使用代理模式
 * @Author: 5t5
 * @Time: 2024/4/12 17:27
 */

import handler from '../ProxyPattern'


// 定义目标对象
// 目标对象是需要被代理的对象，包括属性和方法
const target = {
    name: "Alice",
    age: 25,
    greet() {
        // greet 方法用于打印一个问候语
        console.log(`Hello, my name is ${this.name}`)
    },
}

// 使用 Proxy 构造函数创建代理对象
// 参数为目标对象和处理程序对象
const proxy = new Proxy(target, handler)

// 访问代理对象的 name 属性
// 代理对象会调用 handler.get 拦截器
console.log(proxy.name) // 获取 name 属性，拦截器将打印日志

// 设置代理对象的 age 属性
// 代理对象会调用 handler.set 拦截器
proxy.age = 30 // 设置 age 属性，拦截器将打印日志

// 调用代理对象的 greet 方法
// 代理对象会调用 handler.apply 拦截器
proxy.greet() // 调用 greet 方法，拦截器将打印日志