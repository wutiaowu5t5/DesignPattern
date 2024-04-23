/*
 * @Description: UseAudiSubclass.js
 * @Author: 5t5
 * @Time: 2024/4/11 15:23
 */

import AudiSubclass from '../SubClass/AudiSubclass'

const options = {
    carInfo: {
        name: 'Audi A4',
        lights: 'LED',
        color: 'Black'
    }
}

// 创建AudiSubclass实例
const audiFactory = new AudiSubclass(options)

try {
    // 使用工厂创建一个AudiCar实例
    const myAudiCar = audiFactory.createCar()
    // 调用drive方法
    myAudiCar.drive()
} catch (error) {
    console.error(error.message)
}