/*
 * @Description: 具体支付策略-支付宝
 * @Author: 5t5
 * @Time: 2024/4/29 17:47
 */

import BasicPaymentStrategy from '../Basic/BasicPaymentStrategy'

class AliPayStrategy extends BasicPaymentStrategy {
    constructor() {
        super()
        this._partnerId = null // 初始化为null，表示未设置
        this._sellerId = null // 同上
    }
    
    // 新增方法用于设置参数
    setCredentials(partnerId, sellerId) {
        if (!partnerId || !sellerId) {
            throw new Error('partnerId 和 sellerId 都是必填项')
        }
        this._partnerId = partnerId
        this._sellerId = sellerId
        
        return this
    }
    
    // 在调用核心功能前检查参数是否已设置
    pay(amount) {
        if (!this._partnerId || !this._sellerId) {
            throw new Error('请先调用 setCredentials 设置 PartnerId 和 SellerId')
        }
        console.log(`使用支付宝支付，PartnerId: ${this._partnerId}, SellerId: ${this._sellerId}, 金额: ${amount}`)
    }
}

export default new AliPayStrategy