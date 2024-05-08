/*
 * @Description: 文件对象基类子类-图片文件
 * @Author: 5t5
 * @Time: 2024/5/8 17:16
 */

/**
 * ImageFile类继承自FileSystem类，用于处理图像文件相关操作。
 */
import FileSystem from './File'

/**
 * 创建一个ImageFile实例。
 * @param {string} name 文件名。
 * @param {Blob|Uint8Array} data 文件数据。
 */
class ImageFile extends FileSystem {
    constructor(name, data) {
        super(name) // 调用父类构造函数
        this.data = data // 存储文件数据
    }
    
    /**
     * 获取文件类型。
     * @return {string} 返回文件类型，此处固定为'image'。
     */
    getType() {
        return 'image'
    }
}

export default ImageFile