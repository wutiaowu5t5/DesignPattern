/*
 * @Description: 文件对象基类子类-文本文件
 * @Author: 5t5
 * @Time: 2024/5/8 17:16
 */
import FileSystem from './File'

class TextFile extends FileSystem {
    constructor(name, content) {
        super(name)
        this.content = content
    }
    
    getType() {
        return 'text'
    }
}

export default TextFile