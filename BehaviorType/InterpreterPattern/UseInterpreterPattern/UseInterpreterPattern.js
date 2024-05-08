/*
 * @Description: 怎么使用解释器模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:23
 */

/**
 * 导入解释器模式中的加法、乘法函数及数字表达式类
 */
import { add, multiply, NumberExpression } from '../InterpreterPattern'

// 创建一个表达式，该表达式表示 3 加上 5 乘以 2 的结果
const expression = add(
    new NumberExpression(3),
    multiply(
        new NumberExpression(5),
        new NumberExpression(2)
    )
)

// 输出表达式的解释结果
console.log(expression.interpret()) // 输出: 13