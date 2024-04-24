/*
 * @Description: 怎么使用享元模式
 * @Author: 5t5
 * @Time: 2024/4/24 16:05
 */


import CharacterFactory from '../FlyweightPattern'

try {
    // 尝试创建并显示字符对象
    // 首次请求字符'A'的实例
    const charA = CharacterFactory.getCharacter('A')
    charA.display([1, 1])
    
    // 首次请求字符'B'的实例
    const charB = CharacterFactory.getCharacter('B')
    charB.display([2, 2])
    
    // 再次请求字符'A'的实例，预期将复用之前的实例而不是创建新实例
    const anotherCharA = CharacterFactory.getCharacter('A')
    anotherCharA.display([3, 3])
    
    // 验证两个字符'A'的实例是否相同
    console.log(charA === anotherCharA) // 预期输出 true，表明两个'A'字符引用了同一实例
} catch (error) {
    // 捕获并输出可能发生的错误
    console.error(error)
}
