/*
 * @Description: 表达式子类-取余
 * @Author: 5t5
 * @Time: 2024/5/8 18:11
 */

/**
 * ModuloExpression类继承自CompoundExpression，用于解释求模运算。
 * 它接收两个表达式作为分子和分母，并在求模运算时抛出零除错误。
 */
import { CompoundExpression } from '../InterpreterPattern'

class ModuloExpression extends CompoundExpression {
    /**
     * 执行求模运算。
     * @returns {number} 返回两个表达式求模后的结果。
     * @throws {Error} 当分母为零时抛出错误。
     */
    interpret() {
        // 解释并获取分母的值
        const divisor = this.expression2.interpret()
        // 检查分母是否为零
        if (divisor === 0) {
            throw new Error("Modulo by zero")
        }
        // 执行求模运算并返回结果
        return this.expression1.interpret() % divisor
    }
}

export default ModuloExpression