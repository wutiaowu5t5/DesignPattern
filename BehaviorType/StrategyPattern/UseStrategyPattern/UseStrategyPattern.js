/*
 * @Description: 怎么使用策略模式
 * @Author: 5t5
 * @Time: 2024/4/29 17:24
 */
/**
 * 导入策略模式相关的类和支付策略的实现
 */
import { CheckStand, PaymentStrategy } from '../StrategyPattern'
import WeChatPayStrategy from '../SubClass/Expansion/WeChatPayStrategy'
import AliPayStrategy from '../SubClass/Expansion/AliPayStrategy'
import creditCardStrategy from '../SubClass/Expansion/CreditCardStrategy'

/**
 * 注册不同的支付策略并设置其凭证或细节
 * 1. 微信支付: 设置appId和apiKey
 * 2. 支付宝支付: 设置合作伙伴ID和卖家ID
 * 3. 信用卡支付: 设置卡号、安全码和到期日期
 */
PaymentStrategy.register("wechat", WeChatPayStrategy.setCredentials("wxAppId123", "apiKey456"))
PaymentStrategy.register("alipay", AliPayStrategy.setCredentials("aliPartnerId789", "sellerId012"))
PaymentStrategy.register("creditCard", creditCardStrategy.setCardDetails('1234567890123456', '123', '12/23'))

/**
 * 处理不同方式的支付
 * 1. 微信支付 100 元
 * 2. 支付宝支付 200 元
 * 3. 信用卡支付 200 元
 */
CheckStand.processPayment(100, "wechat") // 使用微信支付
CheckStand.processPayment(200, "alipay") // 使用支付宝支付
CheckStand.processPayment(200, "creditCard") // 使用信用卡支付

/**
 * 动态添加新的支付策略
 * 可以通过扩展PaymentStrategy来创建新的支付方式
 */
class NewPaymentStrategy extends PaymentStrategy {
    // 代码参考其他具体支付策略类
}
PaymentStrategy.register("newMethod", NewPaymentStrategy.setCredentials())

/**
 * 测试新添加的支付策略
 * 使用新方法支付50元
 */
CheckStand.processPayment(50, "newMethod")

/**
 * 移除不再支持的支付策略
 * 从支持列表中移除微信支付
 */
PaymentStrategy.unregister("wechat")
