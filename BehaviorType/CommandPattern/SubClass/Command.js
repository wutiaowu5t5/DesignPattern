/*
 * @Description: Command.js
 * @Author: 5t5
 * @Time: 2024/5/8 14:50
 */

class Command {
    constructor(device) {
        if (new.target === Command) {
            throw new Error("本类不能实例化")
        }
        this.device = device
    }
    
    execute() {
        throw new Error("execute 方法必须被重写")
    }
    
    undo() {
        throw new Error("undo 方法必须被重写")
    }
}

class TurnOnCommand extends Command {
    execute() {
        this.device.turnOn()
    }
    
    undo() {
        this.device.turnOff()
    }
}

class TurnOffCommand extends Command {
    execute() {
        this.device.turnOff()
    }
    
    undo() {
        this.device.turnOn()
    }
}

export {
    Command,
    TurnOnCommand,
    TurnOffCommand
}