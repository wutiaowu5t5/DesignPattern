/*
 * @Description: 基础支付策略接口
 * @Author: 5t5
 * @Time: 2024/4/29 17:45
 */

class BasicPaymentStrategy {
    pay(amount) {
        throw new Error("pay() 方法必须在子类中实现")
    }
}

export default BasicPaymentStrategy