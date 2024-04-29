/*
 * @Description: 怎么使用策略模式
 * @Author: 5t5
 * @Time: 2024/4/29 17:24
 */


import { CheckStand, PaymentStrategy } from '../StrategyPattern'
import WeChatPayStrategy from '../SubClass/Expansion/WeChatPayStrategy'
import AliPayStrategy from '../SubClass/Expansion/AliPayStrategy'
import creditCardStrategy from '../SubClass/Expansion/CreditCardStrategy'

PaymentStrategy.register("wechat", WeChatPayStrategy.setCredentials("wxAppId123", "apiKey456"))
PaymentStrategy.register("alipay", AliPayStrategy.setCredentials("aliPartnerId789", "sellerId012"))
PaymentStrategy.register("creditCard", creditCardStrategy.setCardDetails('1234567890123456', '123', '12/23'))


// 处理支付
CheckStand.processPayment(100, "wechat") // 使用微信支付
CheckStand.processPayment(200, "alipay") // 使用支付宝支付
CheckStand.processPayment(200, "creditCard") // 使用信用卡支付



// 动态添加新的支付策略
class NewPaymentStrategy extends PaymentStrategy {
    // 代码参考其他具体支付策略类
}
PaymentStrategy.register("newMethod", NewPaymentStrategy.setCredentials())

// 测试新添加的支付策略
CheckStand.processPayment(50, "newMethod")

// 移除不再支持的支付策略
PaymentStrategy.unregister("wechat")