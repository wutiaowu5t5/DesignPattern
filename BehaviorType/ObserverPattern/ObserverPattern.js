/*
 * @Description: 行为型-观察者模式
 * @Author: 5t5
 * @Time: 2024/4/24 15:53
 */
// Observer.js
class Observer {
    constructor() {
        this.observers = new Set()
    }
    
    subscribe(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Observer.subscribe: Expected function')
        }
        this.observers.add(fn)
    }
    
    unsubscribe(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Observer.unsubscribe: Expected function')
        }
        this.observers.delete(fn)
    }
    
    notify(data) {
        this.observers.forEach(observer => observer(data))
    }
}

const Watcher = Object.freeze(new Observer())

export default Watcher