/*
 * @Description: 职责链模式子类-DepartmentManager
 * @Author: 5t5
 * @Time: 2024/5/8 11:19
 */

// 导入链式责任模式的处理器基类
import Processor from '../ChainOfResponsibilityPattern'

/**
 * 部门经理类，继承自处理器基类，用于处理员工请假请求。
 */
class DepartmentManager extends Processor {
    /**
     * 构造函数初始化部门经理。
     */
    constructor() {
        super("部门经理", 5) // 调用父类构造函数，设置名称为“部门经理”，审批权限级别为5天
    }
    
    /**
     * 处理请假请求。
     * @param {Object} request 请假请求对象，包含请假天数等信息。
     */
    processRequest(request) {
        // 如果请假天数在部门经理的审批权限范围内，则审批通过
        if (request.leaveDays <= this.authorityLevel) {
            console.log(`${this.name}审批了${request.leaveDays}天的请假。`)
        } else if (this.nextProcessor) { // 如果存在下一个处理器（上级领导），则将请求转交
            console.log(`${this.name}无法处理，请转交给${this.nextProcessor.name}`)
            this.nextProcessor.processRequest(request)
        } else { // 如果没有下一个处理器，表示无法处理此请求
            console.log(`无法处理，请假天数过长。`)
        }
    }
}

// 导出部门经理类
export default DepartmentManager
