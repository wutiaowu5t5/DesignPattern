/*
 * @Description: 结构型-享元模式
 * @Author: 5t5
 * @Time: 2024/4/24 16:05
 */


/**
 * 表示一个字符及其相关操作的类。
 */
class Character {
    /**
     * 构造一个字符对象。
     * @param {string} char 一个长度为1的字符串。
     * @throws {Error} 如果输入不是一个长度为1的字符串，抛出错误。
     */
    constructor(char) {
        if (typeof char !== 'string' || char.length !== 1) {
            throw new Error('Character must be a single character string.')
        }
        this.char = char
    }
    
    /**
     * 在指定位置显示字符。
     * @param {number[]} position 一个包含两个数字的数组，表示位置。
     * @throws {Error} 如果位置不是一个包含两个数字的数组，抛出错误。
     */
    display(position) {
        if (!Array.isArray(position) || position.length !== 2) {
            throw new Error('Position must be an array of two numbers.')
        }
        console.log(`Character '${this.char}' displayed at position (${position[0]}, ${position[1]})`)
    }
}

/**
 * 用于创建和管理字符对象的工厂类。
 */
class CharacterFactory {
    #characters = {} // 用于存储已创建的字符对象的私有属性
    
    /**
     * 获取一个字符对象，如果不存在则创建。
     * @param {string} char 一个长度为1的字符串，表示要获取的字符。
     * @return {Character} 返回对应的字符对象。
     * @throws {Error} 如果输入不是一个长度为1的字符串，抛出错误。
     */
    getCharacter(char) {
        if (typeof char !== 'string' || char.length !== 1) {
            throw new Error('Character must be a single character string.')
        }
        
        if (!(char in this.#characters)) {
            this.#characters[char] = new Character(char)
        }
        return this.#characters[char]
    }
}

// 导出一个CharacterFactory的实例
export default new CharacterFactory()