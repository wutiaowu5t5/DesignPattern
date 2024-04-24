/*
 * @Description: 结构型-桥接模式
 * @Author: 5t5
 * @Time: 2024/4/23 16:39
 */

/**
 * Shape 类定义了基本的形状对象，包括颜色和位置属性，并提供了一系列方法来操作这些属性。
 * @constructor
 * @param {string} color - 形状的颜色，默认为"black"。
 */
class Shape {
    constructor(color = "black") {
        this.color = color  // 设置形状颜色
        this.position = { x: 0, y: 0 }  // 初始化形状位置为原点
    }
    
    /**
     * 设置形状的颜色。
     * @param {string} color - 新的颜色值，默认为"black"。
     */
    setColor(color = "black") {
        this.color = color
    }
    
    /**
     * 获取形状的颜色。
     * @returns {string} 返回当前形状的颜色。
     */
    getColor() {
        return this.color
    }
    
    /**
     * 设置形状的位置。
     * @param {number} x - x轴坐标。
     * @param {number} y - y轴坐标。
     */
    setPosition(x, y) {
        this.position.x = x
        this.position.y = y
    }
    
    /**
     * 获取形状的位置。
     * @returns {Object} 返回一个包含x和y属性的对象。
     */
    getPosition() {
        return { ...this.position }
    }
    
    /**
     * 抽象方法，用于绘制形状。子类需要重写此方法。
     */
    draw() {
        throw new Error("Method 'draw' must be implemented.")
    }
}

export default Shape  // 导出默认的 Shape 类
