/*
 * @Description: 具体支付策略-微信
 * @Author: 5t5
 * @Time: 2024/4/29 17:46
 */

import BasicPaymentStrategy from '../Basic/BasicPaymentStrategy'

class WeChatPayStrategy extends BasicPaymentStrategy {
    constructor() {
        super()
        this._appId = null // 初始化为null，表示未设置
        this._apiKey = null // 同上
        // 注意：这里不直接在构造函数里绑定pay方法，而是放在类的原型上
    }
    
    // 新增方法用于设置参数
    setCredentials(appId, apiKey) {
        if (!appId || !apiKey) {
            throw new Error('appId 和 apiKey 都是必填项')
        }
        this._appId = appId
        this._apiKey = apiKey
    }
    
    // 修改pay方法为原型方法，并在调用前检查参数是否已设置
    pay(amount) {
        if (!this._appId || !this._apiKey) {
            throw new Error('请先调用 setCredentials 设置 appId 和 apiKey')
        }
        console.log(`使用微信支付，AppId: ${this._appId}, 金额: ${amount}`)
    }
}

export default new WeChatPayStrategy