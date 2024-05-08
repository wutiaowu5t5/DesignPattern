/*
 * @Description: 行为型-职责链模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:16
 */

class Processor {
    constructor(name, authorityLevel) {
        if (new.target === Processor) {
            throw new Error("不能实例化抽象类Processor")
        }
        this.name = name
        this.authorityLevel = authorityLevel
        this.nextProcessor = null
    }
    
    setNextProcessor(nextProcessor) {
        if (!(nextProcessor instanceof Processor)) {
            throw new Error("下一个审批者必须是Processor的实例")
        }
        this.nextProcessor = nextProcessor
    }
    
    processRequest(request) {
        throw new Error("必须实现processRequest方法")
    }
}

export default Processor