/*
 * @Description: 文件对象基类子类-文本文件
 * @Author: 5t5
 * @Time: 2024/5/8 17:16
 */

/**
 * TextFile类继承自FileSystem类，用于处理文本文件的相关操作。
 */
import FileSystem from './File'

/**
 * 创建一个TextFile实例。
 * @param {string} name 文件名。
 * @param {string} content 文件内容。
 */
class TextFile extends FileSystem {
    constructor(name, content) {
        super(name) // 调用父类的构造函数
        this.content = content // 设置文件内容
    }
    
    /**
     * 获取文件类型。
     * @returns {string} 返回文件类型，此处固定为'text'。
     */
    getType() {
        return 'text'
    }
}

export default TextFile