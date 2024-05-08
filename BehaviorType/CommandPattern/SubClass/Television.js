/*
 * @Description: Television.js
 * @Author: 5t5
 * @Time: 2024/5/8 14:47
 */

/**
 * 电视类
 */
class Television {
    /**
     * 打开电视
     * @无参数
     * @无返回值
     */
    turnOn() {
        console.log("电视已打开")
    }
    
    /**
     * 关闭电视
     * @无参数
     * @无返回值
     */
    turnOff() {
        console.log("电视已关闭")
    }
}

// 导出电视类作为默认模块
export default Television