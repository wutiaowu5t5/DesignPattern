/*
 * @Description: 行为型-状态模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:20
 */

/**
 * 自动售货机类，管理产品状态和行为。
 */
import VendingMachineState from './SubClass/VendingMachineState'
import HasProductState from './SubClass/HasProductState'
import SoldOutState from './SubClass/SoldOutState'

class VendingMachine {
    /**
     * 构造函数初始化自动售货机状态。
     * @param {number} initialStock 初始库存量。
     */
    constructor(initialStock) {
        this.hasProductState = new HasProductState(this) // 当有产品时的状态
        this.soldOutState = new SoldOutState(this) // 当产品售罄时的状态
        this.currentState = initialStock > 0 ? this.hasProductState : this.soldOutState // 根据初始库存设置当前状态
    }
    
    /**
     * 设置自动售货机的状态。
     * @param {VendingMachineState} newState 新的状态对象。
     */
    setState(newState) {
        if (newState instanceof VendingMachineState) {
            console.log(`状态变化：从${this.currentState.constructor.name}到${newState.constructor.name}`)
            this.currentState = newState
        } else {
            console.error("无效的状态对象")
        }
    }
    
    /**
     * 获取有产品状态对象。
     * @returns {HasProductState} 有产品状态对象。
     */
    getHasProductState() {
        return this.hasProductState
    }
    
    /**
     * 获取售罄状态对象。
     * @returns {SoldOutState} 售罄状态对象。
     */
    getSoldOutState() {
        return this.soldOutState
    }
    
    /**
     * 销售产品，行为取决于当前状态。
     */
    sellProduct() {
        this.currentState.sellProduct()
    }
    
    /**
     * 补充库存，行为取决于当前状态。
     */
    restock() {
        this.currentState.restock()
    }
}

export default VendingMachine