/*
 * @Description: 文件对象基类子类-图片文件
 * @Author: 5t5
 * @Time: 2024/5/8 17:16
 */

import FileSystem from './File'

class ImageFile extends FileSystem {
    constructor(name, data) {
        super(name)
        this.data = data
    }
    
    getType() {
        return 'image'
    }
}

export default ImageFile