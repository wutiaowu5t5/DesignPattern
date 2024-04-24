/*
 * @Description: 怎么使用桥接模式
 * @Author: 5t5
 * @Time: 2024/4/23 16:39
 */

// 导入Shape基类，实现形状的抽象接口
import Shape from '../BridgePattern'

/**
 * Circle类，继承自Shape类，代表一个圆形对象。
 */
class Circle extends Shape {
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

// 创建一个红色的圆形实例，半径为10
const redCircle = new Circle("red", 10)

// 设置圆形的位置为 (100, 100)
redCircle.setPosition(100, 100)

// 获取并输出圆形的位置信息
console.log("Circle position:", redCircle.getPosition())

// 输出圆形的半径
console.log("Circle radius:", redCircle.getRadius())

// 绘制圆形
redCircle.draw() // 输出：Drawing Circle with color red and radius 10




/**
 * Square 类继承自 Shape 类，代表一个正方形形状。
 * @extends Shape
 */
class Square extends Shape {
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

// 创建一个蓝色的正方形实例，边长为20
const blueSquare = new Square("blue", 20)

// 设置正方形的位置为 (200, 200)
blueSquare.setPosition(200, 200)

// 获取并输出正方形的位置信息
console.log("Square position:", blueSquare.getPosition())

// 输出正方形的边长
console.log("Square side length:", blueSquare.getSideLength())

// 绘制正方形
blueSquare.draw() // 输出：Drawing Square with color blue and side length 20
