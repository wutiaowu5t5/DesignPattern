/*
 * @Description: 表达式子类-除法
 * @Author: 5t5
 * @Time: 2024/5/8 18:11
 */

import { CompoundExpression } from '../InterpreterPattern'

class DivisionExpression extends CompoundExpression {
    interpret() {
        const divisor = this.expression2.interpret()
        if (divisor === 0) {
            throw new Error("Division by zero")
        }
        return this.expression1.interpret() / divisor
    }
}

export default DivisionExpression