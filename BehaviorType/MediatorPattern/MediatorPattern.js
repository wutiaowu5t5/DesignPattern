/*
 * @Description: 行为型-中介者模式
 * @Author: 5t5
 * @Time: 2024/5/8 17:01
 */

class User {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.chatRoom = null
    }

    sendMessage(message) {
        if (this.chatRoom) {
            this.chatRoom.sendMessage(this, message)
        } else {
            console.log('You are not in a chat room!')
        }
    }

    receive(message, senderName) {
        console.log(`${this.name} received a message from ${senderName}: ${message}`)
    }

    joinChatRoom(chatRoom) {
        if (chatRoom instanceof ChatRoom) { // 添加类型检查
            this.chatRoom = chatRoom
            chatRoom.addUser(this)
        } else {
            console.error('Invalid chat room provided.')
        }
    }

    leaveChatRoom() {
        if (this.chatRoom) {
            this.chatRoom.removeUser(this)
            this.chatRoom = null
        }
    }

    getName() {
        return this.name
    }
}

class ChatRoom {
    constructor() {
        this.users = new Map()
    }

    addUser(user) {
        if (!this.users.has(user.id)) {
            this.users.set(user.id, user)
            console.log(`${user.getName()} has joined the chat room.`)
        } else {
            console.warn(`User with id ${user.id} is already in the chat room.`)
        }
    }

    removeUser(user) {
        if (this.users.has(user.id)) {
            const userName = user.getName()
            this.users.delete(user.id)
            console.log(`${userName} has left the chat room.`)
        } else {
            console.warn(`User with id ${user.id} is not in the chat room.`)
        }
    }

    sendMessage(sender, message) {
        const senderName = sender.getName()
        for (const [userId, user] of this.users) {
            if (userId !== sender.id) {
                user.receive(message, senderName)
            }
        }
    }
}

export {
    User,
    ChatRoom
}