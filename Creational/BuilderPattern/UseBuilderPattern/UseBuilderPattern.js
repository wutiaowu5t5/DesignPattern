/*
 * @Description: 怎么使用建造者模式
 * @Author: 5t5
 * @Time: 2024/4/11 17:58
 */

import CarBuilder from '../BuilderPattern'

const carBuilder = new CarBuilder()
const car = carBuilder.setMake('Audi').setModel('A4').setColor('blue').build()
