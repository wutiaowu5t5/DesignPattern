/*
 * @Description: UseCommandPattern.js
 * @Author: 5t5
 * @Time: 2024/5/7 18:17
 */

import RemoteControl from '../CommandPattern'
import Television from '../SubClass/Television'
import Stereo from '../SubClass/Stereo'
import { TurnOffCommand, TurnOnCommand } from '../SubClass/Command'

const tv = new Television()
const stereo = new Stereo()

const turnOnTvCommand = new TurnOnCommand(tv)
const turnOffTvCommand = new TurnOffCommand(tv)

const turnOnStereoCommand = new TurnOnCommand(stereo)
const turnOffStereoCommand = new TurnOffCommand(stereo)

const remoteControl = new RemoteControl()

remoteControl.setCommand(turnOnTvCommand)
remoteControl.setCommand(turnOffTvCommand)
remoteControl.setCommand(turnOnStereoCommand)
remoteControl.setCommand(turnOffStereoCommand)

remoteControl.pressButton() // 输出：电视已打开
remoteControl.pressButton() // 输出：电视已关闭
remoteControl.pressButton() // 输出：音响已打开
remoteControl.pressButton() // 输出：音响已关闭

remoteControl.pressUndo()   // 输出：音响已打开
remoteControl.pressUndo()   // 输出：音响已关闭
remoteControl.pressUndo()   // 输出：电视已打开
remoteControl.pressUndo()   // 输出：电视已关闭

remoteControl.pressUndo()   // 输出：没有可撤销的命令