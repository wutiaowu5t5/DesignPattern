/*
 * @Description: 具体支付策略-信用卡
 * @Author: 5t5
 * @Time: 2024/4/29 17:47
 */

import { PaymentStrategy } from '../../StrategyPattern'

class CreditCardStrategy extends PaymentStrategy {
    constructor(cardNumber, cvv, expirationDate) {
        super()
        const _cardNumber = cardNumber
        const _cvv = cvv
        const _expirationDate = expirationDate

        this.pay = amount => {
            console.log(`使用信用卡支付，卡号: ****${_cardNumber.slice(-4)}, CVV: ${_cvv}, 金额: ${amount}`)
        }
    }
}


export default new CreditCardStrategy