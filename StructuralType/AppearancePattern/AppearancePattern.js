/*
 * @Description: 结构型-外观模式
 * @Author: 5t5
 * @Time: 2024/4/23 15:32
 */

/**
 * 音频解码器类 (Class)
 *
 * 负责解码音频文件。
 */
class AudioDecoder {
    /**
     * 解码指定的音频文件。
     * @param {string} audioFile 需要解码的音频文件路径或名称。
     */
    decode(audioFile) {
        console.log(`解码音频文件: ${audioFile}`)
    }
}

/**
 * 音频控制器类 (Class)
 *
 * 负责管理音频的播放控制。
 */
class AudioController {
    /**
     * 播放音频。
     */
    play() {
        console.log("播放音频")
    }
    
    /**
     * 暂停音频。
     */
    pause() {
        console.log("暂停音频")
    }
    
    /**
     * 停止音频播放。
     */
    stop() {
        console.log("停止音频")
    }
}

/**
 * 音量控制器类 (Class)
 *
 * 负责管理音量的设置。
 */
class VolumeController {
    /**
     * 设置音量级别。
     * @param {number} volumeLevel 需要设置的音量级别。
     */
    setVolume(volumeLevel) {
        console.log(`设置音量为: ${volumeLevel}`)
    }
}

/**
 * 音频播放器外观类 (Class)
 *
 * 提供一个简单统一的接口来控制音频的播放、暂停、停止以及音量设置，隐藏了子系统的复杂性。
 * 通过封装`AudioDecoder`、`AudioController`和`VolumeController`等子系统，简化了对外部使用者的交互逻辑。
 */
class AudioPlayerFacade {
    /**
     * 构造函数，初始化音频解码器、音频控制器和音量控制器。
     */
    constructor() {
        this.audioDecoder = new AudioDecoder()
        this.audioController = new AudioController()
        this.volumeController = new VolumeController()
    }
    
    /**
     * 播放指定的音频文件。
     * @param {string} audioFile 需要播放的音频文件路径或名称。
     */
    playAudio(audioFile) {
        this.audioDecoder.decode(audioFile)
        this.audioController.play()
    }
    
    /**
     * 暂停当前正在播放的音频。
     */
    pauseAudio() {
        this.audioController.pause()
    }
    
    /**
     * 停止当前正在播放的音频。
     */
    stopAudio() {
        this.audioController.stop()
    }
    
    /**
     * 设置播放音量。
     * @param {number} volumeLevel 需要设置的音量级别。
     */
    setVolume(volumeLevel) {
        this.volumeController.setVolume(volumeLevel)
    }
}


export default AudioPlayerFacade