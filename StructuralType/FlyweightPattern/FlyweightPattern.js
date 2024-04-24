/*
 * @Description: 结构型-享元模式
 * @Author: 5t5
 * @Time: 2024/4/24 16:05
 */


class Character {
    constructor(char) {
        if (typeof char !== 'string' || char.length !== 1) {
            throw new Error('Character must be a single character string.')
        }
        this.char = char
    }
    
    display(position) {
        if (!Array.isArray(position) || position.length !== 2) {
            throw new Error('Position must be an array of two numbers.')
        }
        console.log(`Character '${this.char}' displayed at position (${position[0]}, ${position[1]})`)
    }
}

class CharacterFactory {
    #characters = {} // 私有属性
    
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

export default new CharacterFactory()