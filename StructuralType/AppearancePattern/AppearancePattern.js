/*
 * @Description: 结构型-外观模式
 * @Author: 5t5
 * @Time: 2024/4/23 15:32
 */

// 子系统：音频解码器
class AudioDecoder {
    decode(audioFile) {
        console.log(`解码音频文件: ${audioFile}`)
    }
}

// 子系统：音频控制器
class AudioController {
    play() {
        console.log("播放音频")
    }
    
    pause() {
        console.log("暂停音频")
    }
    
    stop() {
        console.log("停止音频")
    }
}

// 子系统：音量控制器
class VolumeController {
    setVolume(volumeLevel) {
        console.log(`设置音量为: ${volumeLevel}`)
    }
}

// 外观类：音频播放器外观
class AudioPlayerFacade {
    constructor() {
        this.audioDecoder = new AudioDecoder()
        this.audioController = new AudioController()
        this.volumeController = new VolumeController()
    }
    
    playAudio(audioFile) {
        this.audioDecoder.decode(audioFile)
        this.audioController.play()
    }
    
    pauseAudio() {
        this.audioController.pause()
    }
    
    stopAudio() {
        this.audioController.stop()
    }
    
    setVolume(volumeLevel) {
        this.volumeController.setVolume(volumeLevel)
    }
}

export default AudioPlayerFacade