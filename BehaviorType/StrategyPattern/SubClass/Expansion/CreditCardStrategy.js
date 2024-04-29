/*
 * @Description: 具体支付策略-信用卡
 * @Author: 5t5
 * @Time: 2024/4/29 17:47
 */

/**
 * 信用卡支付策略类，继承自基础支付策略类 BasicPaymentStrategy。
 * 提供设置信用卡详情和支付功能。
 */
import BasicPaymentStrategy from '../Basic/BasicPaymentStrategy'

class CreditCardStrategy extends BasicPaymentStrategy {
    /**
     * 构造函数：初始化信用卡支付策略实例。
     */
    constructor() {
        super() // 调用父类的构造函数
        this._cardNumber = null // 初始化信用卡号为空
        this._cvv = null // 初始化CVV码为空
        this._expirationDate = null // 初始化过期日期为空
        
        // 将pay方法定义在原型上，以便所有实例共享，同时便于在调用前检查状态
    }
    
    /**
     * 设置信用卡的详细信息。
     * @param {string} cardNumber 信用卡号
     * @param {string} cvv 安全码（CVV）
     * @param {string} expirationDate 过期日期
     * @returns {CreditCardStrategy} 返回当前实例以支持链式调用。
     * @throws {Error} 如果缺少必填项，则抛出错误。
     */
    setCardDetails(cardNumber, cvv, expirationDate) {
        if (!cardNumber || !cvv || !expirationDate) {
            throw new Error('cardNumber, cvv, 和 expirationDate 都是必填项')
        }
        this._cardNumber = cardNumber
        this._cvv = cvv
        this._expirationDate = expirationDate
        
        return this
    }
    
    /**
     * 使用设置的信用卡信息进行支付。
     * @param {number} amount 支付金额
     * @throws {Error} 如果未先设置信用卡信息，则抛出错误。
     */
    pay(amount) {
        if (!this._cardNumber || !this._cvv || !this._expirationDate) {
            throw new Error('请先调用 setCardDetails 设置卡信息')
        }
        console.log(`使用信用卡支付，卡号: ****${this._cardNumber.slice(-4)}, CVV: ${this._cvv}, 金额: ${amount}`)
    }
}


export default new CreditCardStrategy // 导出信用卡支付策略的实例
