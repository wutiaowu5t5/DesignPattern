/*
 * @Description: 行为型-解释器模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:23
 */

// 表达式基类
import AdditionExpression from './SubClass/AdditionExpression'
import SubtractionExpression from './SubClass/SubtractionExpression'
import MultiplicationExpression from './SubClass/MultiplicationExpression'
import DivisionExpression from './SubClass/DivisionExpression'
import ModuloExpression from './SubClass/ModuloExpression'

class Expression {
    interpret() {
        throw new Error("interpret() must be implemented in derived class")
    }
}

// 复合表达式基类
class CompoundExpression extends Expression {
    constructor(expression1, expression2) {
        super()
        if (!(expression1 instanceof Expression) || !(expression2 instanceof Expression)) {
            throw new Error("Both operands must be instances of Expression")
        }
        this.expression1 = expression1
        this.expression2 = expression2
    }
}

// 数字表达式
class NumberExpression extends Expression {
    constructor(number) {
        super()
        if (typeof number !== 'number') {
            throw new Error("NumberExpression requires a number")
        }
        this.number = number
    }
    
    interpret() {
        return this.number
    }
}

// 辅助方法用于简化表达式构建过程
function add(expression1, expression2) {
    return new AdditionExpression(expression1, expression2)
}

function subtract(expression1, expression2) {
    return new SubtractionExpression(expression1, expression2)
}

function multiply(expression1, expression2) {
    return new MultiplicationExpression(expression1, expression2)
}

function divide(expression1, expression2) {
    return new DivisionExpression(expression1, expression2)
}

function modulo(expression1, expression2) {
    return new ModuloExpression(expression1, expression2)
}


export {
    Expression,
    CompoundExpression,
    NumberExpression,
    add,
    subtract,
    multiply,
    divide,
    modulo
}