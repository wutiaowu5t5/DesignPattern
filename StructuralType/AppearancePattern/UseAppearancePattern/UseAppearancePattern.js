/*
 * @Description: 怎么使用外观模式
 * @Author: 5t5
 * @Time: 2024/4/23 15:32
 */


// 使用外观模式控制音频播放
// 导入AudioPlayerFacade类
import AudioPlayerFacade from '../AppearancePattern'

// 创建一个AudioPlayerFacade的实例
const audioPlayerFacade = new AudioPlayerFacade()

// 播放音频文件"music.mp3"
audioPlayerFacade.playAudio("music.mp3")

// 暂停当前正在播放的音频
audioPlayerFacade.pauseAudio()

// 设置音量为80%
audioPlayerFacade.setVolume(80)

// 停止当前正在播放的音频
audioPlayerFacade.stopAudio()