/*
 * @Description: 怎么使用中介者模式
 * @Author: 5t5
 * @Time: 2024/5/8 17:01
 */

import { ChatRoom, User } from '../MediatorPattern'

const chatRoom = new ChatRoom()

const user1 = new User(1, 'User 1')
const user2 = new User(2, 'User 2')
const user3 = new User(3, 'User 3')

user1.joinChatRoom(chatRoom)
user2.joinChatRoom(chatRoom)
user3.joinChatRoom(chatRoom)

user1.send('Hello, everyone!')
user2.send('Hi, there!')