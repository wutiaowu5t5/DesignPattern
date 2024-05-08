/*
 * @Description: 怎么使用状态模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:21
 */

/**
 * 导入VendingMachine类，该类实现了状态模式
 */
import VendingMachine from '../StatePattern'

/**
 * 初始化一个拥有10个商品的自动售货机实例
 */
const vendingMachine = new VendingMachine(10)

/**
 * 在有货状态下进行商品销售和补货操作的示例
 */
vendingMachine.sellProduct() // 输出：商品已售出
vendingMachine.restock() // 输出：无法补货，售货机中已有商品

/**
 * 切换自动售货机到缺货状态，并进行操作示例
 */
vendingMachine.setState(vendingMachine.getSoldOutState())
vendingMachine.sellProduct() // 输出：无法售出，商品已售罄
vendingMachine.restock() // 输出：补货成功

/**
 * 尝试传入无效状态进行测试
 */
vendingMachine.setState("InvalidState") // 输出：无效的状态对象