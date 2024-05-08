/*
 * @Description: 具体支付策略-微信
 * @Author: 5t5
 * @Time: 2024/4/29 17:46
 */

/**
 * 微信支付策略类，继承自基础支付策略类 BasicPaymentStrategy。
 */
import BasicPaymentStrategy from '../Basic/BasicPaymentStrategy'

class WeChatPayStrategy extends BasicPaymentStrategy {
    /**
     * 构造函数，初始化支付策略。
     */
    constructor() {
        super()
        this._appId = null // 初始化为null，表示未设置
        this._apiKey = null // 同上
        // 注意：这里不直接在构造函数里绑定pay方法，而是放在类的原型上
    }
    
    /**
     * 设置支付所必要的认证信息。
     * @param {string} appId 微信支付的AppID。
     * @param {string} apiKey 微信支付的API密钥。
     * @returns {WeChatPayStrategy} 返回当前实例以支持链式调用。
     * @throws {Error} 如果appId或apiKey未提供，则抛出错误。
     */
    setCredentials(appId, apiKey) {
        if (!appId || !apiKey) {
            throw new Error('appId 和 apiKey 都是必填项')
        }
        this._appId = appId
        this._apiKey = apiKey
        
        return this
    }
    
    /**
     * 实现支付功能的方法。
     * @param {number} amount 需要支付的金额。
     * @throws {Error} 如果appId和apiKey未先通过setCredentials方法设置，则抛出错误。
     */
    pay(amount) {
        if (!this._appId || !this._apiKey) {
            throw new Error('请先调用 setCredentials 设置 appId 和 apiKey')
        }
        console.log(`使用微信支付，AppId: ${this._appId}, 金额: ${amount}`)
    }
}

export default new WeChatPayStrategy