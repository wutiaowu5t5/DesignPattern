/*
 * @Description: 状态模式子类-有货状态基类
 * @Author: 5t5
 * @Time: 2024/5/8 16:40
 */

/**
 * 该类表示售货机已有商品的状态。
 * 继承自VendingMachineState，以提供特定于售出商品状态的行为。
 */
import VendingMachineState from './VendingMachineState'

class HasProductState extends VendingMachineState {
    /**
     * 出售产品的方法。当售出产品时，将状态切换到售罄状态。
     */
    sellProduct() {
        console.log("商品已售出")
        this.vendingMachine.setState(this.vendingMachine.getSoldOutState())
    }
    
    /**
     * 尝试为售货机补货的方法。在已有商品的状态下，该操作不被允许，
     * 所以只是打印一条信息并不进行任何操作。
     */
    restock() {
        console.log("无法补货，售货机中已有商品")
    }
}

export default HasProductState