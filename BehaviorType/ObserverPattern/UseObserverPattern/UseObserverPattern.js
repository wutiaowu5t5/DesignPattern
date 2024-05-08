/*
 * @Description: 怎么使用观察者模式
 * @Author: 5t5
 * @Time: 2024/4/24 15:53
 */


/**
 * 导入Watcher对象，该对象来自于ObserverPattern模块，用于实现观察者模式。
 */
import Watcher from '../ObserverPattern'

/**
 * 定义第一个观察者函数，当接收到数据时，打印出数据。
 * @param {any} data - 接收到的数据。
 */
const observer1 = data => console.log(`Observer 1 received: ${data}`)

/**
 * 定义第二个观察者函数，当接收到数据时，打印出数据。
 * @param {any} data - 接收到的数据。
 */
const observer2 = data => console.log(`Observer 2 received: ${data}`)

// 订阅observer1和observer2，使其成为Watcher的观察者。
Watcher.subscribe(observer1)
Watcher.subscribe(observer2)

// 通知所有观察者，发送消息'Hello World'。
Watcher.notify('Hello World')

// 取消observer1的订阅。
Watcher.unsubscribe(observer1)

// 再次通知所有观察者，发送消息'How are you?'，此时observer1不会收到该消息。
Watcher.notify('How are you?')