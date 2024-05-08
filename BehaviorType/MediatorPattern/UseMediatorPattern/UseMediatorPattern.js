/*
 * @Description: 怎么使用中介者模式
 * @Author: 5t5
 * @Time: 2024/5/8 17:01
 */

/**
 * 导入ChatRoom和User类
 * 从'../MediatorPattern'路径导入ChatRoom和User类，用于创建聊天室和用户实例。
 */
import { ChatRoom, User } from '../MediatorPattern'

/**
 * 创建一个聊天室实例
 * 创建一个名为chatRoom的ChatRoom实例，作为用户交流的平台。
 */
const chatRoom = new ChatRoom()

/**
 * 创建用户实例
 * 创建三个不同的User实例，分别代表用户1、用户2和用户3。
 */
const user1 = new User('1', 'User 1')
const user2 = new User('2', 'User 2')
const user3 = new User('3', 'User 3')

/**
 * 用户加入聊天室
 * 将三个用户实例加入到chatRoom聊天室中，使他们能够进行通信。
 */
user1.joinChatRoom(chatRoom)
user2.joinChatRoom(chatRoom)
user3.joinChatRoom(chatRoom)

/**
 * 用户发送消息
 * 用户1和用户2分别向聊天室发送消息，演示了消息的发送过程。
 */
user1.sendMessage('Hello, everyone!')
user2.sendMessage('Hi, there!')