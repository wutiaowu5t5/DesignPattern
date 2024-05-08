/*
 * @Description: 怎么使用备忘录模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:23
 */

import TextEditor from '../MediatorPattern'

const editor = new TextEditor()

editor.type('Hello, ')
editor.save()
editor.type('world!')
editor.save()

console.log(editor.getContent()) // 输出：Hello, world!

editor.undo()
console.log(editor.getContent()) // 输出：Hello,

editor.undo()
console.log(editor.getContent()) // 输出：（空字符串）

editor.restore(1) // 输出：无效的历史索引

console.log(editor.getHistory())