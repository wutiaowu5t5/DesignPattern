/*
 * @Description: 结构型-组合模式
 * @Author: 5t5
 * @Time: 2024/4/24 11:45
 */

/**
 * 表示文件系统的一个组件，是一个抽象基类，不能直接实例化。
 */
class FileSystemComponent {
    /**
     * 构造函数，创建一个文件系统组件实例。
     * @param {string} name 组件的名称。
     * @throws {Error} 当尝试直接实例化FileSystemComponent时抛出错误。
     */
    constructor(name) {
        if (new.target === FileSystemComponent) {
            throw new Error('FileSystemComponent is an abstract class and cannot be instantiated directly.')
        }
        this.name = name
    }
    
    /**
     * 执行文件系统组件的操作，此方法在子类中被重写。
     * @param {number} indent 缩进级别，用于格式化输出。
     * @throws {Error} 当调用此方法时抛出错误，因为这是一个抽象方法。
     */
    operation(indent = 0) {
        throw new Error('This method should be overridden')
    }
}

/**
 * 表示一个目录，继承自FileSystemComponent。
 */
export class Directory extends FileSystemComponent {
    /**
     * 构造函数，创建一个目录实例。
     * @param {string} name 目录的名称。
     */
    constructor(name) {
        super(name)
        this.children = [] // 存储子组件的数组
    }
    
    /**
     * 向目录中添加一个组件。
     * @param {FileSystemComponent} component 要添加的文件系统组件。
     * @throws {Error} 当添加的对象不是FileSystemComponent的实例时抛出错误。
     */
    add(component) {
        if (!(component instanceof FileSystemComponent)) {
            throw new Error('Component must be an instance of FileSystemComponent')
        }
        this.children.push(component)
    }
    
    /**
     * 从目录中移除一个组件。
     * @param {FileSystemComponent} component 要移除的文件系统组件。
     * @returns {boolean} 成功移除返回true，否则返回false。
     */
    remove(component) {
        const index = this.children.indexOf(component)
        if (index !== -1) {
            this.children.splice(index, 1)
            return true
        }
        return false
    }
    
    /**
     * 执行目录的操作，包括打印目录名称和所有子组件的信息。
     * @param {number} indent 缩进级别，用于格式化输出。
     */
    operation(indent = 0) {
        console.log(`${' '.repeat(indent)}Directory: ${this.name}`)
        this.children.forEach(child => child.operation(indent + 2))
    }
}

/**
 * 表示一个文件，继承自FileSystemComponent。
 */
export class File extends FileSystemComponent {
    /**
     * 执行文件的操作，即打印文件的名称。
     * @param {number} indent 缩进级别，用于格式化输出。
     */
    operation(indent = 0) {
        console.log(`${' '.repeat(indent)}File: ${this.name}`)
    }
}