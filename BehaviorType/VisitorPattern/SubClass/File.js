/*
 * @Description: 文件对象基类
 * @Author: 5t5
 * @Time: 2024/5/8 17:16
 */

import { Visitor } from '../VisitorPattern'

class FileSystem {
    constructor(name) {
        if (new.target === FileSystem) {
            throw new TypeError('Cannot construct File instances directly')
        }
        this.name = name
    }
    
    // 接受访问者对象
    accept(visitor) {
        if (!(visitor instanceof Visitor)) {
            throw new TypeError('Visitor object expected')
        }
        visitor.visit(this)
    }
    
    // 获取文件类型的方法
    getType() {
        throw new Error("getType method must be implemented by subclasses")
    }
}

export default FileSystem