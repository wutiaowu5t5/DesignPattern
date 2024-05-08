/*
 * @Description: 状态模式子类-售货机状态基类
 * @Author: 5t5
 * @Time: 2024/5/8 16:40
 */

/**
 * VendingMachineState类定义了自动售货机状态的基类，为状态模式的一部分。
 * 这个类主要是为了提供给子类继承，子类需要实现其中的sellProduct和restock方法。
 *
 * @param {Object} vendingMachine 对象引用，指向自动售货机实例，允许状态对象访问或修改自动售货机的状态。
 */
class VendingMachineState {
    /**
     * 构造函数，初始化VendingMachineState实例。
     *
     * @param {Object} vendingMachine 自动售货机实例，用于在状态中控制和访问售货机功能。
     */
    constructor(vendingMachine) {
        this.vendingMachine = vendingMachine; // 绑定自动售货机实例到当前状态对象
    }
    
    /**
     * 抽象方法，要求子类实现售出商品的逻辑。
     *
     * @throws {Error} 如果子类未实现此方法，抛出错误提示。
     */
    sellProduct() {
        throw new Error('子类必须实现此方法') // 强制子类重写以实现具体售货逻辑
    }
    
    /**
     * 抽象方法，要求子类实现补货的逻辑。
     *
     * @throws {Error} 如果子类未实现此方法，抛出错误提示。
     */
    restock() {
        throw new Error('子类必须实现此方法') // 强制子类重写以实现具体补货逻辑
    }
}

// 导出VendingMachineState类作为模块的默认导出项，便于其他模块使用
export default VendingMachineState