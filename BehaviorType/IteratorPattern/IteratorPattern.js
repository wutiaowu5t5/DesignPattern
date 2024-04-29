/*
 * @Description: 行为型-迭代器模式
 * @Author: 5t5
 * @Time: 2024/4/25 10:07
 */

/**
 * ListCollection类定义了一个列表集合，支持添加元素、删除元素、迭代遍历以及对函数执行或其它类型数据打印的功能。
 */
class ListCollection {
    /**
     * 构造函数初始化集合元素数组。
     */
    constructor() {
        this.elements = [] // 初始化集合元素数组
    }
    
    /**
     * 向集合中添加元素。
     * @param {any} element 要添加到集合中的元素。
     */
    add(element) {
        this.elements.push(element)
    }
    
    /**
     * 从集合中删除指定索引的元素。
     * @param {number} index 要删除元素的索引。
     * @throws {Error} 如果索引超出范围，则抛出错误。
     */
    remove(index) {
        if (index >= 0 && index < this.elements.length) {
            this.elements.splice(index, 1)
        } else {
            throw new Error('Index out of bounds')
        }
    }
    
    /**
     * 实现迭代器协议，允许集合被遍历。
     * @yields {any} 遍历集合中的每个元素。
     */
    *[Symbol.iterator]() {
        for (let element of this.elements) {
            yield element
        }
    }
    
    /**
     * 遍历集合，如果元素是函数则执行，否则打印元素。
     * 该方法为内部方法，不直接暴露给外部使用。
     */
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

export default new ListCollection

