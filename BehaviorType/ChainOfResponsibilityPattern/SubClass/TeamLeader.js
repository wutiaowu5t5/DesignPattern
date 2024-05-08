/*
 * @Description: 职责链模式子类-TeamLeader
 * @Author: 5t5
 * @Time: 2024/5/8 11:19
 */

// 导入链式责任模式的处理器基类
import Processor from '../ChainOfResponsibilityPattern'

/**
 * 团队领导类，继承自处理器基类，处理员工请假请求。
 */
class TeamLeader extends Processor {
    /**
     * 构造函数，初始化团队领导实例。
     */
    constructor() {
        super("团队领导", 2) // 调用父类构造器，设置名称为“团队领导”，审批权限级别为2
    }
    
    /**
     * 处理请假请求的方法。
     * @param {Object} request 请假请求对象，包含请假天数等信息。
     * @returns
     */
    processRequest(request) {
        // 如果请假天数在团队领导的审批权限范围内，则审批通过
        if (request.leaveDays <= this.authorityLevel) {
            console.log(`${this.name}审批了${request.leaveDays}天的请假。`)
        } else if (this.nextProcessor) {
            // 如果请假天数超出团队领导的审批范围，但存在下一个处理器（比如经理），则转交下一个处理器处理
            console.log(`${this.name}无法处理，请转交给${this.nextProcessor.name}`)
            this.nextProcessor.processRequest(request)
        } else {
            // 如果请假天数超出团队领导的审批范围，并且不存在下一个处理器，则审批不通过
            console.log(`无法处理，请假天数过长。`)
        }
    }
}

// 导出TeamLeader类
export default TeamLeader
