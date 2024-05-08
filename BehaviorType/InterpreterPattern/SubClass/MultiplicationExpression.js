/*
 * @Description: 表达式子类-乘法
 * @Author: 5t5
 * @Time: 2024/5/8 18:11
 */

/**
 * MultiplicationExpression 类继承自 CompoundExpression，
 * 用于表示乘法运算的表达式。
 */
import { CompoundExpression } from '../InterpreterPattern'

class MultiplicationExpression extends CompoundExpression {
    /**
     * 解释执行乘法运算。
     * @returns {number} 返回两个表达式相乘的结果。
     */
    interpret() {
        // 执行两个子表达式的解释操作，并返回其乘积
        return this.expression1.interpret() * this.expression2.interpret()
    }
}

export default MultiplicationExpression