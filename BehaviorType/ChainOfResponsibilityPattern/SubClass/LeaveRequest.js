/*
 * @Description: 职责链模式子类-LeaveRequest
 * @Author: 5t5
 * @Time: 2024/5/8 11:19
 */

/**
 * LeaveRequest 类用于创建一个请假申请实例。
 * @param {number} leaveDays 请假天数。
 */
class LeaveRequest {
    constructor(leaveDays) {
        this.leaveDays = leaveDays; // 初始化请假天数
    }
}

export default LeaveRequest; // 导出LeaveRequest类作为默认模块
