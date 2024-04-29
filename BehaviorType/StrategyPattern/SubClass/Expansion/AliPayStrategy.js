/*
 * @Description: 具体支付策略-支付宝
 * @Author: 5t5
 * @Time: 2024/4/29 17:47
 */

import BasicPaymentStrategy from '../Basic/BasicPaymentStrategy'

class AliPayStrategy extends BasicPaymentStrategy {
    constructor(partnerId, sellerId) {
        super()
        this._partnerId = partnerId // 前缀下划线是一种常见的私有属性模拟方式
        this._sellerId = sellerId
    }

    pay(amount) {
        console.log(`使用支付宝支付，PartnerId: ${this._partnerId}, SellerId: ${this._sellerId}, 金额: ${amount}`)
    }
}

export default new AliPayStrategy