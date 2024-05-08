/*
 * @Description: 表达式子类-加法
 * @Author: 5t5
 * @Time: 2024/5/8 18:10
 */

import { CompoundExpression } from '../InterpreterPattern'

class AdditionExpression extends CompoundExpression {
    interpret() {
        return this.expression1.interpret() + this.expression2.interpret()
    }
}

export default AdditionExpression