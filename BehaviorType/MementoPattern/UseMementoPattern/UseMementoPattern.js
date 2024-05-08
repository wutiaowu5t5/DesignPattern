/*
 * @Description: 怎么使用备忘录模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:23
 */

// 导入TextEditor类
import TextEditor from '../MementoPattern'

// 创建一个TextEditor实例
const editor = new TextEditor()

// 输入文本并保存
editor.type('Hello, ')
editor.save()
// 继续输入文本并保存
editor.type('world!')
editor.save()

// 打印当前编辑器内容
console.log(editor.getContent()) // 输出：Hello, world!

// 执行撤销操作
editor.undo()
// 打印撤销后的内容
console.log(editor.getContent()) // 输出：Hello,

// 再次执行撤销操作
editor.undo()
// 打印再次撤销后的内容
console.log(editor.getContent()) // 输出：（空字符串）

// 尝试使用无效的历史索引进行恢复操作
editor.restore(1) // 输出：无效的历史索引

// 打印编辑器的历史记录
console.log(editor.getHistory())