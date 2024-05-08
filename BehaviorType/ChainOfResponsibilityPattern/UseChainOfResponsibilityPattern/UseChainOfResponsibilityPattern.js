/*
 * @Description: 怎么使用职责链模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:16
 */

/**
 * 主程序入口用于演示如何处理员工请假流程。
 * 首先，创建了团队领导、部门经理和人力资源经理的实例。
 * 然后，设定它们之间的处理顺序，即团队领导先处理请假申请，然后传递给部门经理，最后由人力资源经理处理。
 * 接着，创建了几个请假申请实例，并通过团队领导的实例处理这些请假申请。
 */

// 导入相关的类
import TeamLeader from '../SubClass/TeamLeader'
import DepartmentManager from '../SubClass/DepartmentManager'
import HRManager from '../SubClass/HRManager'
import LeaveRequest from '../SubClass/LeaveRequest'

// 创建团队领导、部门经理和人力资源经理的实例
const teamLeader = new TeamLeader()
const departmentManager = new DepartmentManager()
const hrManager = new HRManager()

// 设置处理流程的链式关系
teamLeader.setNextProcessor(departmentManager)
departmentManager.setNextProcessor(hrManager)

// 创建请假申请实例，并提交给团队领导处理
const request1 = new LeaveRequest(1)
const request3 = new LeaveRequest(3)
const request7 = new LeaveRequest(7)
const request12 = new LeaveRequest(12)

teamLeader.processRequest(request1)
teamLeader.processRequest(request3)
teamLeader.processRequest(request7)
teamLeader.processRequest(request12)