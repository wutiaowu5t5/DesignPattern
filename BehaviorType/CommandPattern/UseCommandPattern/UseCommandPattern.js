/*
 * @Description: UseCommandPattern.js
 * @Author: 5t5
 * @Time: 2024/5/7 18:17
 */

/**
 * 这段代码展示了使用命令模式来控制家电设备（电视和音响）的示例。
 * 它通过将具体的打开和关闭命令分配给遥控器的不同按键来实现对家电设备的控制，
 * 并且提供了撤销操作的功能。
 */

// 导入远程控制、电视和音响类以及开关命令类
import RemoteControl from '../CommandPattern'
import Television from '../SubClass/Television'
import Stereo from '../SubClass/Stereo'
import { TurnOffCommand, TurnOnCommand } from '../SubClass/Command'

// 创建电视和音响实例
const tv = new Television()
const stereo = new Stereo()

// 创建电视和音响的开关命令实例
const turnOnTvCommand = new TurnOnCommand(tv)
const turnOffTvCommand = new TurnOffCommand(tv)

const turnOnStereoCommand = new TurnOnCommand(stereo)
const turnOffStereoCommand = new TurnOffCommand(stereo)

// 创建远程控制实例，并设置命令
const remoteControl = new RemoteControl()

remoteControl.setCommand(turnOnTvCommand)
remoteControl.setCommand(turnOffTvCommand)
remoteControl.setCommand(turnOnStereoCommand)
remoteControl.setCommand(turnOffStereoCommand)

// 使用遥控器控制电视和音响的开关，并演示撤销操作
remoteControl.pressButton() // 输出：电视已打开
remoteControl.pressButton() // 输出：电视已关闭
remoteControl.pressButton() // 输出：音响已打开
remoteControl.pressButton() // 输出：音响已关闭

// 演示撤销操作，每次按下undo按钮将撤销上一步的操作
remoteControl.pressUndo()   // 输出：音响已打开
remoteControl.pressUndo()   // 输出：音响已关闭
remoteControl.pressUndo()   // 输出：电视已打开
remoteControl.pressUndo()   // 输出：电视已关闭

// 当没有更多的命令可以撤销时，给出相应提示
remoteControl.pressUndo()   // 输出：没有可撤销的命令