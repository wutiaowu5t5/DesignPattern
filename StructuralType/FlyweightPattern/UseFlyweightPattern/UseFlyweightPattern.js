/*
 * @Description: 怎么使用享元模式
 * @Author: 5t5
 * @Time: 2024/4/24 16:05
 */


import CharacterFactory from '../FlyweightPattern'

try {
    // 创建并显示字符对象
    const charA = CharacterFactory.getCharacter('A')
    charA.display([1, 1])
    
    const charB = CharacterFactory.getCharacter('B')
    charB.display([2, 2])
    
    // 再次请求相同的字符对象，应该不会创建新的实例，而是复用已有的
    const anotherCharA = CharacterFactory.getCharacter('A')
    anotherCharA.display([3, 3])
    
    // 检查两个字符'A'是否为同一个实例
    console.log(charA === anotherCharA) // 应该输出 true，因为它们是相同的实例
} catch (error) {
    console.error(error)
}