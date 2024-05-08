/*
 * @Description: 行为型-命令模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:17
 */

import { Command } from './SubClass/Command'

/**
 * 远程控制类，用于管理和执行命令
 */
class RemoteControl {
    /**
     * 构造函数，初始化命令列表和历史记录
     */
    constructor() {
        this.commands = [] // 储存待执行的命令
        this.history = [] // 用于存储执行过的命令
    }
    
    /**
     * 设置命令
     * @param {Command} command - 需要设置的命令对象，必须是Command的实例
     * @throws {Error} 会抛出错误如果传入的参数不是Command的实例
     */
    setCommand(command) {
        if (!(command instanceof Command)) {
            throw new Error("传递的参数必须是Command的实例")
        }
        this.commands.push(command)
    }
    
    /**
     * 按下按钮执行命令
     * 如果有可执行的命令，则执行队列中的第一个命令，并将其移出队列，存入历史记录
     */
    pressButton() {
        if (this.commands.length > 0) {
            const command = this.commands.shift() // 执行队列中的第一个命令
            if ('execute' in command) {
                command.execute()
                this.history.push(command) // 将执行的命令存入历史记录
            } else {
                console.log("无法执行命令：缺少execute方法")
            }
        } else {
            console.log("没有可执行的命令")
        }
    }
    
    /**
     * 按下撤销按钮，执行撤销操作
     * 如果历史记录中有命令，则执行历史记录中的最后一个命令的undo方法
     */
    pressUndo() {
        if (this.history.length > 0) {
            const command = this.history.pop() // 取出历史记录中的最后一个命令
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