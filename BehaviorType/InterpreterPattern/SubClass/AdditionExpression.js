/*
 * @Description: 表达式子类-加法
 * @Author: 5t5
 * @Time: 2024/5/8 18:10
 */

/**
 * AdditionExpression 类继承自 CompoundExpression，
 * 用于实现解释器模式中的加法表达式解释功能。
 */
import { CompoundExpression } from '../InterpreterPattern'

class AdditionExpression extends CompoundExpression {
    /**
     * 解释执行加法表达式。
     * @returns {number} 表达式的解释结果，即两个表达式结果的和。
     */
    interpret() {
        // 对两个子表达式进行解释，并求和
        return this.expression1.interpret() + this.expression2.interpret()
    }
}

export default AdditionExpression