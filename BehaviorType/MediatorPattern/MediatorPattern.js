/*
 * @Description: 行为型-备忘录模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:23
 */

/**
 * EditorMemento 类用于保存编辑器的状态（内容）。
 */
class EditorMemento {
    /**
     * 构造函数
     * @param {string} content 编辑器的内容
     */
    constructor(content) {
        this.content = content
    }
}

/**
 * TextEditor 类表示一个文本编辑器，支持打字、保存状态、撤销操作等功能。
 */
class TextEditor {
    /**
     * 构造函数
     */
    constructor() {
        this.content = '' // 编辑器当前的内容
        this.history = [] // 编辑器的状态历史记录
        this.historySize = 10 // 限制历史记录的最大大小
    }
    
    /**
     * 在当前内容后添加文字。
     * @param {string} words 要添加的文字
     */
    type(words) {
        this.content += words
    }
    
    /**
     * 保存当前编辑器状态到历史记录。
     */
    save() {
        this.history.push(new EditorMemento(this.content)) // 将当前内容状态保存到历史记录
        if (this.history.length > this.historySize) {
            this.history.shift() // 如果历史记录超过限制，则移除最旧的状态
        }
    }
    
    /**
     * 撤销最后的操作，恢复之前的状态。
     */
    undo() {
        if (this.history.length > 0) {
            this.history.pop() // 移除最新保存的状态
            // 如果历史记录为空，则内容为空字符串；否则，内容恢复为最新保存的状态
            this.content = this.history.length === 0 ? '' : this.history[this.history.length - 1].content
        } else {
            console.error('没有更多的历史状态可以撤销')
        }
    }
    
    /**
     * 恢复到指定历史记录的状态。
     * @param {number} index 要恢复的历史记录的索引
     */
    restore(index) {
        if (index >= 0 && index < this.history.length) {
            this.content = this.history[index].content // 恢复指定索引的内容状态
        } else {
            console.error('无效的历史索引')
        }
    }
    
    /**
     * 获取当前编辑器的内容。
     * @return {string} 编辑器的内容
     */
    getContent() {
        return this.content
    }
    
    /**
     * 获取编辑器的历史记录（状态内容的副本）。
     * @return {string[]} 历史记录中内容的数组
     */
    getHistory() {
        return this.history.map(memento => memento.content) // 返回历史记录中内容的副本，而非引用
    }
    
    /**
     * 清除编辑器的历史记录。
     */
    clearHistory() {
        this.history = []
    }
}

export default TextEditor