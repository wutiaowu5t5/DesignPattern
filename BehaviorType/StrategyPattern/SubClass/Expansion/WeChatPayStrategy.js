/*
 * @Description: 具体支付策略-微信
 * @Author: 5t5
 * @Time: 2024/4/29 17:46
 */

import BasicPaymentStrategy from '../Basic/BasicPaymentStrategy'

class WeChatPayStrategy extends BasicPaymentStrategy {
    constructor(appId, apiKey) {
        super()
        const _appId = appId // 使用下划线前缀是一种常见的非正式私有属性表示法
        const _apiKey = apiKey

        this.pay = function(amount) {
            console.log(`使用微信支付，AppId: ${_appId}, 金额: ${amount}`)
        }
    }
}

export default new WeChatPayStrategy