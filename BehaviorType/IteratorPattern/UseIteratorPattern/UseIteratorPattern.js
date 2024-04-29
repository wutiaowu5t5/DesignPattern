/*
 * @Description: 怎么使用迭代器模式
 * @Author: 5t5
 * @Time: 2024/4/25 10:07
 */
// 使用示例
const list = new ListCollection()

// 添加不同类型的元素
list.add(1);
list.add(function() { console.log('Function executed!'); })
list.add({ key: 'value' })
list.add('Text')

// 调用forEachExecuteOrLog方法遍历并处理集合
list.forEachExecuteOrLog()