/*
 * @Description: 行为型-命令模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:17
 */


import { Command } from './SubClass/Command'

class RemoteControl {
    constructor() {
        this.commands = []
        this.history = [] // 用于存储执行过的命令
    }
    
    setCommand(command) {
        if (!(command instanceof Command)) {
            throw new Error("传递的参数必须是Command的实例")
        }
        this.commands.push(command)
    }
    
    pressButton() {
        if (this.commands.length > 0) {
            const command = this.commands.shift() // 从队列前面取出命令执行
            if ('execute' in command) {
                command.execute()
                this.history.push(command) // 将执行过的命令存入历史记录
            } else {
                console.log("无法执行命令：缺少execute方法")
            }
        } else {
            console.log("没有可执行的命令")
        }
    }
    
    pressUndo() {
        if (this.history.length > 0) {
            const command = this.history.pop() // 从历史记录中取出最后一个命令
            if ('undo' in command) {
                command.undo()
            } else {
                console.log("无法撤销命令：缺少undo方法")
            }
        } else {
            console.log("没有可撤销的命令")
        }
    }
}

export default RemoteControl