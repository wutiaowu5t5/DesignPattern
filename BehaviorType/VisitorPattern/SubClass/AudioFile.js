/*
 * @Description: 文件对象基类子类-音频文件
 * @Author: 5t5
 * @Time: 2024/5/8 17:17
 */

/**
 * 导入文件系统基础类
 */
import FileSystem from './File'

/**
 * AudioFile 类，继承自 FileSystem，用于表示音频文件。
 */
class AudioFile extends FileSystem {
    /**
     * 构造函数，创建一个 AudioFile 实例。
     * @param {string} name - 音频文件的名称。
     * @param {string|Blob|MediaSource} audio - 音频数据，可以是文件路径、Blob对象或MediaSource对象。
     */
    constructor(name, audio) {
        super(name)
        this.audio = audio
    }
    
    /**
     * 获取文件类型，此处固定返回 'audio'。
     * @return {string} 返回字符串 'audio'，表示此类处理的是音频文件。
     */
    getType() {
        return 'audio'
    }
}

/**
 * 导出 AudioFile 类作为默认导出，便于其他模块使用。
 */
export default AudioFile