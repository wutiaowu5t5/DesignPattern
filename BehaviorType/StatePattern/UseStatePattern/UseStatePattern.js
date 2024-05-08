/*
 * @Description: 怎么使用状态模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:21
 */

import VendingMachine from '../StatePattern'

const vendingMachine = new VendingMachine(10) // 初始化有10个商品

// 当前状态为有货状态
vendingMachine.sellProduct() // 输出：商品已售出
vendingMachine.restock() // 输出：无法补货，售货机中已有商品

// 切换到缺货状态
vendingMachine.setState(vendingMachine.getSoldOutState())
vendingMachine.sellProduct() // 输出：无法售出，商品已售罄
vendingMachine.restock() // 输出：补货成功

// 尝试传入无效状态
vendingMachine.setState("InvalidState") // 输出：无效的状态对象