/*
 * @Description: 怎么使用解释器模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:23
 */

import { add, multiply, NumberExpression } from '../InterpreterPattern'

const expression = add(
    new NumberExpression(3),
    multiply(
        new NumberExpression(5),
        new NumberExpression(2)
    )
)
console.log(expression.interpret()) // Output: 13