/*
 * @Description: 行为型-中介者模式
 * @Author: 5t5
 * @Time: 2024/5/8 17:01
 */

/**
 * 表示聊天系统的用户。
 */
class User {
    /**
     * 创建一个User实例。
     * @param {string} id - 用户的唯一标识符。
     * @param {string} name - 用户的名称。
     */
    constructor(id, name) {
        this.id = id
        this.name = name
        this.chatRoom = null
    }

    /**
     * 向当前聊天室发送消息。
     * @param {string} message - 要发送的消息内容。
     */
    sendMessage(message) {
        if (this.chatRoom) {
            this.chatRoom.sendMessage(this, message)
        } else {
            console.log('您还没有加入聊天室！')
        }
    }

    /**
     * 接收来自其他用户的消息。
     * @param {string} message - 接收到的消息内容。
     * @param {string} senderName - 发送者的名称。
     */
    receive(message, senderName) {
        console.log(`${this.name} 收到了来自 ${senderName} 的消息：${message}`)
    }

    /**
     * 加入聊天室。
     * @param {ChatRoom} chatRoom - 要加入的聊天室对象。
     */
    joinChatRoom(chatRoom) {
        if (chatRoom instanceof ChatRoom) { // 检查传入的是否是有效的ChatRoom实例
            this.chatRoom = chatRoom
            chatRoom.addUser(this)
        } else {
            console.error('提供的聊天室无效。')
        }
    }

    /**
     * 退出聊天室。
     */
    leaveChatRoom() {
        if (this.chatRoom) {
            this.chatRoom.removeUser(this)
            this.chatRoom = null
        }
    }

    /**
     * 获取用户名称。
     * @returns {string} - 用户的名称。
     */
    getName() {
        return this.name
    }
}

/**
 * 表示一个聊天室，包含多个用户和消息传递功能。
 */
class ChatRoom {
    /**
     * 创建一个ChatRoom实例。
     */
    constructor() {
        this.users = new Map()
    }

    /**
     * 添加用户到聊天室。
     * @param {User} user - 要添加的用户对象。
     */
    addUser(user) {
        if (!this.users.has(user.id)) {
            this.users.set(user.id, user)
            console.log(`${user.getName()} 已加入聊天室。`)
        } else {
            console.warn(`ID为 ${user.id} 的用户已在聊天室中。`)
        }
    }

    /**
     * 从聊天室中移除用户。
     * @param {User} user - 要移除的用户对象。
     */
    removeUser(user) {
        if (this.users.has(user.id)) {
            const userName = user.getName()
            this.users.delete(user.id)
            console.log(`${userName} 已离开聊天室。`)
        } else {
            console.warn(`ID为 ${user.id} 的用户不在聊天室中。`)
        }
    }

    /**
     * 将消息广播给聊天室中的其他用户。
     * @param {User} sender - 发送消息的用户对象。
     * @param {string} message - 要发送的消息内容。
     */
    sendMessage(sender, message) {
        const senderName = sender.getName()
        for (const [userId, user] of this.users) {
            if (userId !== sender.id) {
                user.receive(message, senderName)
            }
        }
    }
}

// 导出User和ChatRoom类
export {
    User,
    ChatRoom
}