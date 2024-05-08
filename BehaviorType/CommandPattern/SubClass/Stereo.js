/*
 * @Description: Stereo.js
 * @Author: 5t5
 * @Time: 2024/5/8 14:47
 */

/**
 * Stereo类代表一个音响系统。
 */
class Stereo {
    /**
     * 打开音响。
     * 无参数。
     * 无返回值。
     */
    turnOn() {
        console.log("音响已打开")
    }
    
    /**
     * 关闭音响。
     * 无参数。
     * 无返回值。
     */
    turnOff() {
        console.log("音响已关闭")
    }
}

// 导出Stereo类作为默认模块
export default Stereo