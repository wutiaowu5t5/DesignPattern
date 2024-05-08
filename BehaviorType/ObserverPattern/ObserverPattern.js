/*
 * @Description: 行为型-观察者模式
 * @Author: 5t5
 * @Time: 2024/4/24 15:53
 */

/**
 * 观察者类，提供订阅、取消订阅和通知功能。
 */
class Observer {
    /**
     * 构造函数初始化观察者对象。
     */
    constructor() {
        this.observers = new Set() // 使用Set存储订阅的函数
    }
    
    /**
     * 订阅功能，添加一个观察者函数。
     * @param {Function} fn - 需要订阅的函数。
     * @throws {Error} 如果传入的参数不是函数类型，则抛出错误。
     */
    subscribe(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Observer.subscribe: Expected function')
        }
        this.observers.add(fn)
    }
    
    /**
     * 取消订阅功能，移除一个观察者函数。
     * @param {Function} fn - 需要取消订阅的函数。
     * @throws {Error} 如果传入的参数不是函数类型，则抛出错误。
     */
    unsubscribe(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Observer.unsubscribe: Expected function')
        }
        this.observers.delete(fn)
    }
    
    /**
     * 通知所有订阅者函数。
     * @param {*} data - 传递给订阅者函数的数据。
     */
    notify(data) {
        this.observers.forEach(observer => observer(data)) // 循环调用所有订阅者函数，传入数据
    }
}

// 创建一个全局不变的观察者实例
const Watcher = Object.freeze(new Observer())

export default Watcher