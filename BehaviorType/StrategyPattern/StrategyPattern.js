/*
 * @Description: StrategyPattern.js
 * @Author: 5t5
 * @Time: 2024/4/29 17:24
 */

class PaymentStrategyFactory {
    constructor() {
        this.strategies = new Map();
    }
    
    register(name, strategy) {
        if (!(strategy instanceof PaymentStrategy)) {
            throw new Error("注册的策略必须实现PaymentStrategy接口")
        }
        this.strategies.set(name, strategy)
    }
    
    unregister(name) {
        if (this.strategies.has(name)) {
            this.strategies.delete(name)
        } else {
            console.warn(`尝试注销不存在的支付策略: ${name}`)
        }
    }
    
    getStrategy(name) {
        const strategy = this.strategies.get(name)
        if (!strategy) {
            throw new Error(`未找到名为 ${name} 的支付策略`)
        }
        return strategy
    }
}

class Checkout {
    constructor(paymentFactory) {
        this.paymentFactory = paymentFactory
    }

    processPayment(amount, strategyName) {
        const strategy = this.paymentFactory.getStrategy(strategyName)
        strategy.pay(amount)
    }
}

const PaymentStrategy = new PaymentStrategyFactory()
const CheckStand = new Checkout(PaymentStrategy)

export {
    PaymentStrategy,
    CheckStand
}