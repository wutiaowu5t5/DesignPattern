/*
 * @Description: Command.js
 * @Author: 5t5
 * @Time: 2024/5/8 14:50
 */

/**
 * Command 类定义了一个命令模式的基本结构。
 * 该类是抽象的，不应该直接实例化，它的目的是为了被子类继承。
 * @constructor
 * @param {Object} device - 与命令相关联的设备对象。
 * @throws 会抛出错误如果尝试直接实例化 Command 类。
 */
class Command {
    constructor(device) {
        if (new.target === Command) {
            throw new Error("本类不能实例化")
        }
        this.device = device
    }
    
    /**
     * 执行命令的方法。该方法在子类中被重写，以提供具体的命令执行逻辑。
     * @throws {Error} 会抛出错误如果该方法在子类中没有被重写。
     */
    execute() {
        throw new Error("execute 方法必须被重写")
    }
    
    /**
     * 撤销命令的方法。该方法在子类中被重写，以提供具体的命令撤销逻辑。
     * @throws {Error} 会抛出错误如果该方法在子类中没有被重写。
     */
    undo() {
        throw new Error("undo 方法必须被重写")
    }
}

/**
 * TurnOnCommand 类继承自 Command 类，用于执行打开设备的操作。
 */
class TurnOnCommand extends Command {
    /**
     * 执行打开设备的操作。
     */
    execute() {
        this.device.turnOn()
    }
    
    /**
     * 撤销打开设备的操作，即关闭设备。
     */
    undo() {
        this.device.turnOff()
    }
}

/**
 * TurnOffCommand 类继承自 Command 类，用于执行关闭设备的操作。
 */
class TurnOffCommand extends Command {
    /**
     * 执行关闭设备的操作。
     */
    execute() {
        this.device.turnOff()
    }
    
    /**
     * 撤销关闭设备的操作，即打开设备。
     */
    undo() {
        this.device.turnOn()
    }
}

// 导出 Command, TurnOnCommand, TurnOffCommand 供其他模块使用。
export {
    Command,
    TurnOnCommand,
    TurnOffCommand
}