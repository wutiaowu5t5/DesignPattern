/*
 * @Description: 怎么使用外观模式
 * @Author: 5t5
 * @Time: 2024/4/23 15:32
 */


// 使用外观模式控制音频播放
import AudioPlayerFacade from '../AppearancePattern'

const audioPlayerFacade = new AudioPlayerFacade()

audioPlayerFacade.playAudio("music.mp3")
audioPlayerFacade.pauseAudio()
audioPlayerFacade.setVolume(80)
audioPlayerFacade.stopAudio()