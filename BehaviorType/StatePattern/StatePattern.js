/*
 * @Description: 行为型-状态模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:20
 */

import VendingMachineState from './SubClass/VendingMachineState'
import HasProductState from './SubClass/HasProductState'
import SoldOutState from './SubClass/SoldOutState'

class VendingMachine {
    constructor(initialStock) {
        this.hasProductState = new HasProductState(this)
        this.soldOutState = new SoldOutState(this)
        this.currentState = initialStock > 0 ? this.hasProductState : this.soldOutState
    }
    
    setState(newState) {
        if (newState instanceof VendingMachineState) {
            console.log(`状态变化：从${this.currentState.constructor.name}到${newState.constructor.name}`)
            this.currentState = newState
        } else {
            console.error("无效的状态对象")
        }
    }
    
    getHasProductState() {
        return this.hasProductState
    }
    
    getSoldOutState() {
        return this.soldOutState
    }
    
    sellProduct() {
        this.currentState.sellProduct()
    }
    
    restock() {
        this.currentState.restock()
    }
}

export default VendingMachine