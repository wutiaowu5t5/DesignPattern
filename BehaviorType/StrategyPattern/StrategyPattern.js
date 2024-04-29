/*
 * @Description: StrategyPattern.js
 * @Author: 5t5
 * @Time: 2024/4/29 17:24
 */

/**
 * 支付策略工厂类，用于创建和管理不同的支付策略
 */
class PaymentStrategyFactory {
    /**
     * 构造函数，初始化一个空的策略映射
     */
    constructor() {
        this.strategies = new Map();
    }
    
    /**
     * 注册一个新的支付策略
     * @param {string} name 策略的名称
     * @param {PaymentStrategy} strategy 实现了PaymentStrategy接口的策略实例
     * @throws 如果策略没有实现PaymentStrategy接口，则抛出错误
     */
    register(name, strategy) {
        if (!(strategy instanceof PaymentStrategy)) {
            throw new Error("注册的策略必须实现PaymentStrategy接口")
        }
        this.strategies.set(name, strategy)
    }
    
    /**
     * 注销一个已注册的支付策略
     * @param {string} name 要注销的策略名称
     * @returns 如果策略被成功注销，则无返回值；如果策略不存在，则打印警告
     */
    unregister(name) {
        if (this.strategies.has(name)) {
            this.strategies.delete(name)
        } else {
            console.warn(`尝试注销不存在的支付策略: ${name}`)
        }
    }
    
    /**
     * 获取一个指定名称的支付策略
     * @param {string} name 策略的名称
     * @return {PaymentStrategy} 返回指定名称的支付策略实例
     * @throws 如果未找到指定名称的策略，则抛出错误
     */
    getStrategy(name) {
        const strategy = this.strategies.get(name)
        if (!strategy) {
            throw new Error(`未找到名为 ${name} 的支付策略`)
        }
        return strategy
    }
}

/**
 * 结账类，用于处理支付过程
 */
class Checkout {
    /**
     * 构造函数，初始化一个支付工厂
     * @param {PaymentStrategyFactory} paymentFactory 用于创建支付策略的工厂
     */
    constructor(paymentFactory) {
        this.paymentFactory = paymentFactory
    }

    /**
     * 处理支付请求
     * @param {number} amount 需要支付的金额
     * @param {string} strategyName 支付策略的名称
     * @throws 如果找不到指定的支付策略，则抛出错误
     */
    processPayment(amount, strategyName) {
        const strategy = this.paymentFactory.getStrategy(strategyName)
        strategy.pay(amount)
    }
}

// 创建并导出PaymentStrategyFactory和Checkout类
const PaymentStrategy = new PaymentStrategyFactory()
const CheckStand = new Checkout(PaymentStrategy)

export {
    PaymentStrategy,
    CheckStand
}
