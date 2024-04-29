/*
 * @Description: 具体支付策略-信用卡
 * @Author: 5t5
 * @Time: 2024/4/29 17:47
 */

import BasicPaymentStrategy from '../Basic/BasicPaymentStrategy'

class CreditCardStrategy extends BasicPaymentStrategy {
    constructor() {
        super()
        this._cardNumber = null
        this._cvv = null
        this._expirationDate = null
        
        // 将pay方法定义在原型上，以便所有实例共享，同时便于在调用前检查状态
    }
    
    setCardDetails(cardNumber, cvv, expirationDate) {
        if (!cardNumber || !cvv || !expirationDate) {
            throw new Error('cardNumber, cvv, 和 expirationDate 都是必填项')
        }
        this._cardNumber = cardNumber
        this._cvv = cvv
        this._expirationDate = expirationDate
        
        return this
    }
    
    pay(amount) {
        if (!this._cardNumber || !this._cvv || !this._expirationDate) {
            throw new Error('请先调用 setCardDetails 设置卡信息')
        }
        console.log(`使用信用卡支付，卡号: ****${this._cardNumber.slice(-4)}, CVV: ${this._cvv}, 金额: ${amount}`)
    }
}


export default new CreditCardStrategy