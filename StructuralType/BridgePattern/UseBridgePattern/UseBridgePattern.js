/*
 * @Description: 怎么使用桥接模式
 * @Author: 5t5
 * @Time: 2024/4/23 16:39
 */

// 导入Shape基类，实现形状的抽象接口
import { Circle, Square } from '../BridgePattern'

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