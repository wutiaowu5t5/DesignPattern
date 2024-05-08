/*
 * @Description: 状态模式子类-没货状态基类
 * @Author: 5t5
 * @Time: 2024/5/8 16:39
 */

import VendingMachineState from './VendingMachineState'

class SoldOutState extends VendingMachineState {
    sellProduct() {
        console.log("无法售出，商品已售罄")
    }
    
    restock() {
        console.log("补货成功")
        this.vendingMachine.setState(this.vendingMachine.getHasProductState())
    }
}

export default SoldOutState