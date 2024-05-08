/*
 * @Description: 怎么使用职责链模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:16
 */

import TeamLeader from '../SubClass/TeamLeader'
import DepartmentManager from '../SubClass/DepartmentManager'
import HRManager from '../SubClass/HRManager'
import LeaveRequest from '../SubClass/LeaveRequest'

const teamLeader = new TeamLeader()
const departmentManager = new DepartmentManager()
const hrManager = new HRManager()

teamLeader.setNextProcessor(departmentManager)
departmentManager.setNextProcessor(hrManager)

const request1 = new LeaveRequest(1)
const request3 = new LeaveRequest(3)
const request7 = new LeaveRequest(7)
const request12 = new LeaveRequest(12)

teamLeader.processRequest(request1)
teamLeader.processRequest(request3)
teamLeader.processRequest(request7)
teamLeader.processRequest(request12)