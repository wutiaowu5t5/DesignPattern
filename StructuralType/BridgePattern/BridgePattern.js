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

/**
 * Circle类，继承自Shape类，代表一个圆形对象。
 */
export class Circle extends Shape {
    /**
     * 构造函数，创建一个圆形对象。
     * @param {string} color 圆形的颜色。
     * @param {number} radius 圆形的半径。
     */
    constructor(color, radius) {
        super(color) // 调用父类的构造函数，设置颜色
        this.setRadius(radius) // 设置圆形的半径
    }
    
    /**
     * 设置圆形的半径。
     * @param {number} radius 新的半径值。如果值小于等于0，将抛出错误。
     * @throws {Error} 会抛出错误，如果传入的半径值不满足要求。
     */
    setRadius(radius) {
        if (radius <= 0) {
            throw new Error("Radius must be greater than zero.")
        }
        this.radius = radius
    }
    
    /**
     * 获取圆形的半径。
     * @return {number} 圆形的当前半径。
     */
    getRadius() {
        return this.radius
    }
    
    /**
     * 绘制圆形。
     * 该方法会输出当前圆形的颜色和半径信息。
     */
    draw() {
        console.log(`Drawing Circle with color ${this.getColor()} and radius ${this.getRadius()}`)
    }
}


/**
 * Square 类继承自 Shape 类，代表一个正方形形状。
 * @extends Shape
 */
export class Square extends Shape {
    /**
     * 构造一个新的 Square 实例。
     * @param {string} color 正方形的颜色。
     * @param {number} sideLength 正方形的边长。
     */
    constructor(color, sideLength) {
        super(color) // 调用父类的构造函数设置颜色
        this.setSideLength(sideLength) // 设置正方形的边长
    }
    
    /**
     * 设置正方形的边长。
     * @param {number} sideLength 想要设置的边长值。
     * @throws {Error} 如果边长小于等于零，则抛出错误。
     */
    setSideLength(sideLength) {
        if (sideLength <= 0) {
            throw new Error("Side length must be greater than zero.")
        }
        this.sideLength = sideLength
    }
    
    /**
     * 获取正方形的边长。
     * @returns {number} 返回当前正方形的边长。
     */
    getSideLength() {
        return this.sideLength
    }
    
    /**
     * 绘制正方形。
     * 在控制台输出绘制的信息，包括颜色和边长。
     */
    draw() {
        console.log(`Drawing Square with color ${this.getColor()} and side length ${this.getSideLength()}`)
    }
}
