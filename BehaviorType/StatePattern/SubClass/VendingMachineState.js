/*
 * @Description: 状态模式子类-售货机状态基类
 * @Author: 5t5
 * @Time: 2024/5/8 16:40
 */

class VendingMachineState {
    constructor(vendingMachine) {
        this.vendingMachine = vendingMachine
    }
    
    sellProduct() {
        throw new Error('子类必须实现此方法')
    }
    
    restock() {
        throw new Error('子类必须实现此方法')
    }
}

export default VendingMachineState