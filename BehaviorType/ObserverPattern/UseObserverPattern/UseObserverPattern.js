/*
 * @Description: 怎么使用观察者模式
 * @Author: 5t5
 * @Time: 2024/4/24 15:53
 */


import Watcher from '../ObserverPattern'

const observer1 = data => console.log(`Observer 1 received: ${data}`)
const observer2 = data => console.log(`Observer 2 received: ${data}`)

Watcher.subscribe(observer1)
Watcher.subscribe(observer2)

Watcher.notify('Hello World')

Watcher.unsubscribe(observer1)

Watcher.notify('How are you?')