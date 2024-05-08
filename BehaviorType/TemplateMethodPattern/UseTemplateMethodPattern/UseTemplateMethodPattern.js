/*
 * @Description: 怎么使用模板方法模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:14
 */

import Coffee from '../SubClass/Coffee'
import Tea from '../SubClass/Tea'

console.log('制作咖啡：')
const coffee = new Coffee()
coffee.prepareBeverage()

console.log('\n制作茶：')
const tea = new Tea()
tea.prepareBeverage()