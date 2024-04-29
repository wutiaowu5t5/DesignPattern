/*
 * @Description: 行为型-迭代器模式
 * @Author: 5t5
 * @Time: 2024/4/25 10:07
 */

class ListCollection {
    constructor() {
        this.elements = [] // 初始化集合元素数组
    }
    
    // 向集合中添加元素
    add(element) {
        this.elements.push(element)
    }
    
    // 从集合中删除指定索引的元素
    remove(index) {
        if (index >= 0 && index < this.elements.length) {
            this.elements.splice(index, 1)
        } else {
            throw new Error('Index out of bounds')
        }
    }
    
    // 实现迭代器协议
    *[Symbol.iterator]() {
        for (let element of this.elements) {
            yield element
        }
    }
    
    // 内部方法：遍历集合，对函数执行，其他类型数据打印
    forEachExecuteOrLog() {
        for (let item of this) {
            if (typeof item === 'function') {
                item() // 执行函数
            } else {
                console.log(item) // 输出其他类型数据
            }
        }
    }
    
}
