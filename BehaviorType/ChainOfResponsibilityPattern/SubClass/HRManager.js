/*
 * @Description: 职责链模式子类-HRManager
 * @Author: 5t5
 * @Time: 2024/5/8 11:19
 */

// 导入链式责任模式的处理器基类
import Processor from '../ChainOfResponsibilityPattern'

/**
 * 人力资源经理类，继承自处理器基类，用于处理员工请假请求。
 */
class HRManager extends Processor {
    /**
     * 构造函数初始化人力资源经理。
     */
    constructor() {
        super("人力资源经理", 10) // 调用父类构造函数，设置名称为“人力资源经理”，审批权限级别为10天
    }
    
    /**
     * 处理请假请求。
     * @param {Object} request 请假请求对象，包含请假天数等信息。
     */
    processRequest(request) {
        // 如果请假天数在权限级别内，审批通过
        if (request.leaveDays <= this.authorityLevel) {
            console.log(`${this.name}审批了${request.leaveDays}天的请假。`)
        } else if (this.nextProcessor) { // 如果存在下一个处理器，则将请求转交给下一个处理器
            console.log(`${this.name}无法处理，请转交给${this.nextProcessor.name}`)
            this.nextProcessor.processRequest(request)
        } else { // 如果没有下一个处理器，则表示无法处理该请求
            console.log(`无法处理，请假天数过长。`)
        }
    }
}

// 导出HRManager类
export default HRManager