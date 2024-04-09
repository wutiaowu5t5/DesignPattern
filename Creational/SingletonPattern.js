/*
 * @Description: 创建型-单例模式
 * @Author: 5t5
 * @Time: 2024/4/9 10:37
 */

/**
 * 单例模式类
 * 该类确保一个类只有一个实例，并且提供一个全局访问点来获得这个唯一实例。
 */
class GenericSingletonPattern {
    // 私有静态成员变量，用于保存唯一实例
    static #instance;
    
    /**
     * 私有构造函数
     * 防止通过new关键字创建多个实例。
     */
    constructor() {
        if (GenericSingletonPattern.#instance) {
            throw new Error("Cannot instantiate singleton class using new operator.");
        }
    }
    
    /**
     * 公有静态方法，用于获取唯一实例
     * 如果实例不存在，则创建一个新的实例并返回；如果已存在，则直接返回该实例。
     * @returns {GenericSingletonPattern} 单例模式的唯一实例。
     */
    static getInstance() {
        if (!GenericSingletonPattern.#instance) {
            GenericSingletonPattern.#instance = new GenericSingletonPattern();
        }
        return GenericSingletonPattern.#instance;
    }
    
}


export default GenericSingletonPattern

// region HOW TO USE
// 获取单例对象的实例
const instance1 = GenericSingletonPattern.getInstance();
const instance2 = GenericSingletonPattern.getInstance();

// 检查是否是同一个实例
console.log(instance1 === instance2); // 输出: true

// 试图使用 new 关键字创建实例，会抛出错误
const instance3 = new GenericSingletonPattern(); // 抛出错误: Cannot instantiate singleton class using new operator.
// endregion HOW TO USE

