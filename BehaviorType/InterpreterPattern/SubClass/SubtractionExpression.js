/*
 * @Description: 表达式子类-减法
 * @Author: 5t5
 * @Time: 2024/5/8 18:10
 */

/**
 * SubtractionExpression 类继承自 CompoundExpression，
 * 用于实现减法运算的解释器模式。
 */
import { CompoundExpression } from '../InterpreterPattern'

class SubtractionExpression extends CompoundExpression {
    /**
     * 执行减法运算并返回结果。
     * @returns {number} 返回两个表达式相减的结果。
     */
    interpret() {
        // 调用两个子表达式的 interpret 方法并执行减法运算
        return this.expression1.interpret() - this.expression2.interpret()
    }
}

export default SubtractionExpression