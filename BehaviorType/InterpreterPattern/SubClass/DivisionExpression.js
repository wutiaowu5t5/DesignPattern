/*
 * @Description: 表达式子类-除法
 * @Author: 5t5
 * @Time: 2024/5/8 18:11
 */

/**
 * DivisionExpression 类继承自 CompoundExpression，
 * 用于实现除法表达式的解释操作。
 */
import { CompoundExpression } from '../InterpreterPattern'

class DivisionExpression extends CompoundExpression {
    /**
     * 执行除法操作并返回结果。
     * @returns {number} 两个表达式相除的结果。
     * @throws {Error} 如果除数为零，则抛出错误。
     */
    interpret() {
        // 获取除数并检查是否为零
        const divisor = this.expression2.interpret()
        if (divisor === 0) {
            throw new Error("Division by zero")
        }
        // 计算并返回两个表达式相除的结果
        return this.expression1.interpret() / divisor
    }
}

export default DivisionExpression