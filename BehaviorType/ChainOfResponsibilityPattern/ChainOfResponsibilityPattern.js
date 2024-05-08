/*
 * @Description: 行为型-职责链模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:16
 */

/**
 * Processor类定义了一个处理器的基本结构，包括处理器的名称、权限级别以及下一个处理器的设置。
 * 它是一个抽象类，不允许直接实例化，必须通过继承来扩展。
 */
class Processor {
    /**
     * 构造函数初始化处理器的名称和权限级别，并检查是否尝试直接实例化抽象类。
     * @param {string} name 处理器的名称。
     * @param {number} authorityLevel 处理器的权限级别。
     * @throws {Error} 如果尝试直接实例化Processor类，则抛出错误。
     */
    constructor(name, authorityLevel) {
        if (new.target === Processor) {
            throw new Error("不能实例化抽象类Processor")
        }
        this.name = name
        this.authorityLevel = authorityLevel
        this.nextProcessor = null
    }
    
    /**
     * 设置下一个处理器。
     * @param {Processor} nextProcessor 下一个处理器的实例。
     * @throws {Error} 如果传入的不是Processor的实例，则抛出错误。
     */
    setNextProcessor(nextProcessor) {
        if (!(nextProcessor instanceof Processor)) {
            throw new Error("下一个审批者必须是Processor的实例")
        }
        this.nextProcessor = nextProcessor
    }
    
    /**
     * 处理请求的方法，这是一个抽象方法，必须在子类中实现。
     * @param {Object} request 待处理的请求对象。
     * @throws {Error} 必须在子类中实现此方法，否则抛出错误。
     */
    processRequest(request) {
        throw new Error("必须实现processRequest方法")
    }
}

export default Processor
