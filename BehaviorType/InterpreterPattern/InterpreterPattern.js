/*
 * @Description: 行为型-解释器模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:23
 */

/**
 * 主文件导入各个表达式子类并定义表达式相关类和方法。
 * 提供了基本的数学运算表达式及其组合的构建和解释能力。
 */

// 导入表达式子类
import AdditionExpression from './SubClass/AdditionExpression'
import SubtractionExpression from './SubClass/SubtractionExpression'
import MultiplicationExpression from './SubClass/MultiplicationExpression'
import DivisionExpression from './SubClass/DivisionExpression'
import ModuloExpression from './SubClass/ModuloExpression'

/**
 * 表达式基类，定义了表达式的基本行为。
 * 子类需要实现interpret()方法来提供具体的解释执行逻辑。
 */
class Expression {
    interpret() {
        throw new Error("interpret() must be implemented in derived class")
    }
}

/**
 * 复合表达式基类，用于组合两个表达式进行运算。
 * @extends Expression 表达式基类
 */
class CompoundExpression extends Expression {
    /**
     * 构造函数，初始化复合表达式。
     * @param {Expression} expression1 第一个操作数
     * @param {Expression} expression2 第二个操作数
     * @throws {Error} 如果任一操作数不是Expression实例，则抛出错误
     */
    constructor(expression1, expression2) {
        super()
        if (!(expression1 instanceof Expression) || !(expression2 instanceof Expression)) {
            throw new Error("Both operands must be instances of Expression")
        }
        this.expression1 = expression1
        this.expression2 = expression2
    }
}

/**
 * 数字表达式类，用于表示和解释一个简单的数字表达式。
 * @extends Expression 表达式基类
 */
class NumberExpression extends Expression {
    /**
     * 构造函数，初始化数字表达式。
     * @param {number} number 表达式代表的数字
     * @throws {Error} 如果输入不是数字，则抛出错误
     */
    constructor(number) {
        super()
        if (typeof number !== 'number') {
            throw new Error("NumberExpression requires a number")
        }
        this.number = number
    }
    
    /**
     * 解释执行数字表达式，直接返回数字本身。
     * @returns {number} 表达式代表的数字
     */
    interpret() {
        return this.number
    }
}

/**
 * 辅助方法，用于简化创建加法表达式的过程。
 * @param {Expression} expression1 第一个加数
 * @param {Expression} expression2 第二个加数
 * @returns {AdditionExpression} 新创建的加法表达式实例
 */
function add(expression1, expression2) {
    return new AdditionExpression(expression1, expression2)
}

/**
 * 辅助方法，用于简化创建减法表达式的过程。
 * @param {Expression} expression1 被减数
 * @param {Expression} expression2 减数
 * @returns {SubtractionExpression} 新创建的减法表达式实例
 */
function subtract(expression1, expression2) {
    return new SubtractionExpression(expression1, expression2)
}

/**
 * 辅助方法，用于简化创建乘法表达式的过程。
 * @param {Expression} expression1 第一个乘数
 * @param {Expression} expression2 第二个乘数
 * @returns {MultiplicationExpression} 新创建的乘法表达式实例
 */
function multiply(expression1, expression2) {
    return new MultiplicationExpression(expression1, expression2)
}

/**
 * 辅助方法，用于简化创建除法表达式的过程。
 * @param {Expression} expression1 被除数
 * @param {Expression} expression2 除数
 * @returns {DivisionExpression} 新创建的除法表达式实例
 */
function divide(expression1, expression2) {
    return new DivisionExpression(expression1, expression2)
}

/**
 * 辅助方法，用于简化创建取模表达式的过程。
 * @param {Expression} expression1 被除数
 * @param {Expression} expression2 除数
 * @returns {ModuloExpression} 新创建的取模表达式实例
 */
function modulo(expression1, expression2) {
    return new ModuloExpression(expression1, expression2)
}

// 导出各类表达式和辅助方法供外部使用
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