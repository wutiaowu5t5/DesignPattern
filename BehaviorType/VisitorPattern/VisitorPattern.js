/*
 * @Description: 行为型-访问者模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:21
 */

class Visitor {
    visit(file) {
        if (typeof this[file.getType()] === 'function') {
            return this[file.getType()](file)
        }
        throw new Error(`Visitor does not support files of type: ${file.getType()}`)
    }
}

class PrintVisitor extends Visitor {
    text(file) {
        console.log(`Printing text file ${file.name}:`)
        console.log(file.content)
    }
    
    image(file) {
        console.log(`Printing image file ${file.name}`)
        // 实际的图像打印逻辑
    }
    
    audio(file) {
        console.log(`Printing audio file ${file.name}`)
        // 实际的音频打印逻辑
    }
}

class CompressVisitor extends Visitor {
    text(file) {
        console.log(`Compressing text file ${file.name}`)
        // 文本文件压缩逻辑
    }
    
    image(file) {
        console.log(`Compressing image file ${file.name}`)
        // 图像文件压缩逻辑
    }
    
    audio(file) {
        console.log(`Compressing audio file ${file.name}`)
        // 音频文件压缩逻辑
    }
}

class EncryptVisitor extends Visitor {
    text(file) {
        console.log(`Encrypting text file ${file.name}`)
        // 文本文件加密逻辑
    }
    
    image(file) {
        console.log(`Encrypting image file ${file.name}`)
        // 图像文件加密逻辑
    }
    
    audio(file) {
        console.log(`Encrypting audio file ${file.name}`)
        // 音频文件加密逻辑
    }
}

export {
    Visitor,
    PrintVisitor,
    CompressVisitor,
    EncryptVisitor
}