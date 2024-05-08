/*
 * @Description: 行为型-备忘录模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:23
 */

class EditorMemento {
    constructor(content) {
        this.content = content
    }
}

class TextEditor {
    constructor() {
        this.content = ''
        this.history = []
        this.historySize = 10 // 限制历史记录大小
    }
    
    type(words) {
        this.content += words
    }
    
    save() {
        this.history.push(new EditorMemento(this.content))
        if (this.history.length > this.historySize) {
            this.history.shift() // 移除最旧的记录，保持历史记录大小
        }
    }
    
    undo() {
        if (this.history.length > 0) {
            this.history.pop() // 移除最新的记录
            this.content = this.history.length === 0 ? '' : this.history[this.history.length - 1].content
        } else {
            console.error('没有更多的历史状态可以撤销')
        }
    }
    
    restore(index) {
        if (index >= 0 && index < this.history.length) {
            this.content = this.history[index].content
        } else {
            console.error('无效的历史索引')
        }
    }
    
    getContent() {
        return this.content
    }
    
    getHistory() {
        return this.history.map(memento => memento.content) // 返回内容的副本而非引用
    }
    
    clearHistory() {
        this.history = []
    }
}

export default TextEditor