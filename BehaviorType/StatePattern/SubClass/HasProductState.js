/*
 * @Description: 状态模式子类-有货状态基类
 * @Author: 5t5
 * @Time: 2024/5/8 16:40
 */

import VendingMachineState from './VendingMachineState'

class HasProductState extends VendingMachineState {
    sellProduct() {
        console.log("商品已售出")
        this.vendingMachine.setState(this.vendingMachine.getSoldOutState())
    }
    
    restock() {
        console.log("无法补货，售货机中已有商品")
    }
}

export default HasProductState