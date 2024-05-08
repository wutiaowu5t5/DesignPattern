/*
 * @Description: 行为型-访问者模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:21
 */

/**
 * 定义一个Visitor类，提供访问者模式的基本结构。
 */
class Visitor {
    /**
     * 访问给定的文件对象。
     * @param {Object} file 文件对象，需要有getType方法用于获取文件类型。
     * @return {any} 返回调用的具体访问方法的结果。
     * @throws {Error} 如果找不到对应的访问方法，则抛出错误。
     */
    visit(file) {
        if (typeof this[file.getType()] === 'function') {
            return this[file.getType()](file)
        }
        throw new Error(`Visitor does not support files of type: ${file.getType()}`)
    }
}

/**
 * PrintVisitor类继承自Visitor类，实现对不同文件类型的打印操作。
 */
class PrintVisitor extends Visitor {
    /**
     * 打印文本文件。
     * @param {Object} file 文本文件对象，需要包含name和content属性。
     */
    text(file) {
        console.log(`Printing text file ${file.name}:`)
        console.log(file.content)
    }
    
    /**
     * 打印图像文件。
     * @param {Object} file 图像文件对象，需要包含name属性。
     * 此方法为示例，实际的图像打印逻辑需要根据需求实现。
     */
    image(file) {
        console.log(`Printing image file ${file.name}`)
        // 实际的图像打印逻辑
    }
    
    /**
     * 打印音频文件。
     * @param {Object} file 音频文件对象，需要包含name属性。
     * 此方法为示例，实际的音频打印逻辑需要根据需求实现。
     */
    audio(file) {
        console.log(`Printing audio file ${file.name}`)
        // 实际的音频打印逻辑
    }
}

/**
 * CompressVisitor类继承自Visitor类，实现对不同文件类型的压缩操作。
 */
class CompressVisitor extends Visitor {
    /**
     * 压缩文本文件。
     * @param {Object} file 文本文件对象，需要包含name属性。
     */
    text(file) {
        console.log(`Compressing text file ${file.name}`)
        // 文本文件压缩逻辑
    }
    
    /**
     * 压缩图像文件。
     * @param {Object} file 图像文件对象，需要包含name属性。
     * 此方法为示例，实际的图像压缩逻辑需要根据需求实现。
     */
    image(file) {
        console.log(`Compressing image file ${file.name}`)
        // 图像文件压缩逻辑
    }
    
    /**
     * 压缩音频文件。
     * @param {Object} file 音频文件对象，需要包含name属性。
     * 此方法为示例，实际的音频压缩逻辑需要根据需求实现。
     */
    audio(file) {
        console.log(`Compressing audio file ${file.name}`)
        // 音频文件压缩逻辑
    }
}

/**
 * EncryptVisitor类继承自Visitor类，实现对不同文件类型的加密操作。
 */
class EncryptVisitor extends Visitor {
    /**
     * 加密文本文件。
     * @param {Object} file 文本文件对象，需要包含name属性。
     */
    text(file) {
        console.log(`Encrypting text file ${file.name}`)
        // 文本文件加密逻辑
    }
    
    /**
     * 加密图像文件。
     * @param {Object} file 图像文件对象，需要包含name属性。
     * 此方法为示例，实际的图像文件加密逻辑需要根据需求实现。
     */
    image(file) {
        console.log(`Encrypting image file ${file.name}`)
        // 图像文件加密逻辑
    }
    
    /**
     * 加密音频文件。
     * @param {Object} file 音频文件对象，需要包含name属性。
     * 此方法为示例，实际的音频文件加密逻辑需要根据需求实现。
     */
    audio(file) {
        console.log(`Encrypting audio file ${file.name}`)
        // 音频文件加密逻辑
    }
}

// 导出定义的类
export {
    Visitor,
    PrintVisitor,
    CompressVisitor,
    EncryptVisitor
}