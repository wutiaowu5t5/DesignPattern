/*
 * @Description: 文件对象基类子类-音频文件
 * @Author: 5t5
 * @Time: 2024/5/8 17:17
 */

import FileSystem from './File'

class AudioFile extends FileSystem {
    constructor(name, audio) {
        super(name)
        this.audio = audio
    }
    
    getType() {
        return 'audio'
    }
}

export default AudioFile