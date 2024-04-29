/*
 * @Description: 具体支付策略-支付宝
 * @Author: 5t5
 * @Time: 2024/4/29 17:47
 */

/**
 * 支付宝支付策略类，继承自基础支付策略类 BasicPaymentStrategy。
 */
import BasicPaymentStrategy from '../Basic/BasicPaymentStrategy'

class AliPayStrategy extends BasicPaymentStrategy {
    /**
     * 构造函数，初始化支付宝支付策略。
     */
    constructor() {
        super() // 调用父类的构造函数
        this._partnerId = null // 合作伙伴ID，初始化为null
        this._sellerId = null // 卖家ID，初始化为null
    }
    
    /**
     * 设置支付所需的合作伙伴和卖家ID。
     * @param {string} partnerId 合作伙伴ID
     * @param {string} sellerId 卖家ID
     * @returns {AliPayStrategy} 返回当前实例，支持链式调用
     * @throws {Error} 如果缺少合作伙伴ID或卖家ID，则抛出错误
     */
    setCredentials(partnerId, sellerId) {
        if (!partnerId || !sellerId) {
            throw new Error('partnerId 和 sellerId 都是必填项')
        }
        this._partnerId = partnerId
        this._sellerId = sellerId
        
        return this
    }
    
    /**
     * 执行支付操作。
     * @param {number} amount 需要支付的金额
     * @throws {Error} 如果未设置合作伙伴ID或卖家ID，则抛出错误
     */
    pay(amount) {
        if (!this._partnerId || !this._sellerId) {
            throw new Error('请先调用 setCredentials 设置 PartnerId 和 SellerId')
        }
        console.log(`使用支付宝支付，PartnerId: ${this._partnerId}, SellerId: ${this._sellerId}, 金额: ${amount}`)
    }
}

export default new AliPayStrategy // 导出一个初始化好的 AliPayStrategy 实例
