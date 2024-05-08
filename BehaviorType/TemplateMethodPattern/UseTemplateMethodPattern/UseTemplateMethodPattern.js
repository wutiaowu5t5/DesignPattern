/*
 * @Description: 怎么使用模板方法模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:14
 */

/**
 * 主函数演示如何制作咖啡和茶。
 * 本函数不接受参数，也不返回任何值。
 */
import Coffee from '../SubClass/Coffee' // 导入咖啡类
import Tea from '../SubClass/Tea' // 导入茶类

// 制作咖啡的流程
console.log('制作咖啡：')
const coffee = new Coffee() // 创建咖啡实例
coffee.prepareBeverage() // 准备咖啡

// 制作茶的流程
console.log('\n制作茶：')
const tea = new Tea() // 创建茶实例
tea.prepareBeverage() // 准备茶
