/*
 * @Description: 状态模式子类-没货状态基类
 * @Author: 5t5
 * @Time: 2024/5/8 16:39
 */

/**
 * SoldOutState类继承自VendingMachineState，用于表示自动售货机售罄状态。
 * 在这种状态下，自动售货机无法出售商品，但可以进行补货操作。
 */
import VendingMachineState from './VendingMachineState'

class SoldOutState extends VendingMachineState {
    /**
     * 尝试出售商品时的操作。
     * 由于售罄状态，此操作将不执行任何动作，仅输出一条信息。
     */
    sellProduct() {
        console.log("无法售出，商品已售罄")
    }
    
    /**
     * 执行补货操作。
     * 当调用此方法时，自动售货机将改变状态为有货状态（HasProductState）。
     */
    restock() {
        console.log("补货成功")
        // 切换状态至有货状态
        this.vendingMachine.setState(this.vendingMachine.getHasProductState())
    }
}

export default SoldOutState