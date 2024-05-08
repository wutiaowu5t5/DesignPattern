/*
 * @Description: 文件对象基类
 * @Author: 5t5
 * @Time: 2024/5/8 17:16
 */

import { Visitor } from '../VisitorPattern'

/**
 * FileSystem类表示文件系统的一个抽象基类。
 * 该类提供了基本的文件系统对象功能，包括接受访问者和获取文件类型的方法。
 * 该类不应该直接实例化，应由其子类实例化。
 */
class FileSystem {
    /**
     * 构造函数初始化文件系统对象。
     * @param {string} name 文件系统的名称。
     * @throws {TypeError} 如果尝试直接构造FileSystem实例，则抛出TypeError。
     */
    constructor(name) {
        if (new.target === FileSystem) {
            throw new TypeError('Cannot construct File instances directly')
        }
        this.name = name
    }
    
    /**
     * 接受一个访问者对象并对当前对象进行访问。
     * @param {Visitor} visitor 访问者对象。
     * @throws {TypeError} 如果传入的参数不是Visitor类型，则抛出TypeError。
     */
    accept(visitor) {
        if (!(visitor instanceof Visitor)) {
            throw new TypeError('Visitor object expected')
        }
        visitor.visit(this)
    }
    
    /**
     * 获取文件类型的抽象方法。
     * 该方法应由子类实现，以提供具体的文件类型信息。
     * @throws {Error} 当调用该方法时，抛出一个错误，提示必须由子类实现该方法。
     */
    getType() {
        throw new Error("getType method must be implemented by subclasses")
    }
}

export default FileSystem