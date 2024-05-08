/*
 * @Description: 职责链模式子类-DepartmentManager
 * @Author: 5t5
 * @Time: 2024/5/8 11:19
 */

import Processor from '../ChainOfResponsibilityPattern'

class DepartmentManager extends Processor {
    constructor() {
        super("部门经理", 5)
    }
    
    processRequest(request) {
        if (request.leaveDays <= this.authorityLevel) {
            console.log(`${this.name}审批了${request.leaveDays}天的请假。`)
        } else if (this.nextProcessor) {
            console.log(`${this.name}无法处理，请转交给${this.nextProcessor.name}`)
            this.nextProcessor.processRequest(request)
        } else {
            console.log(`无法处理，请假天数过长。`)
        }
    }
}

export default DepartmentManager