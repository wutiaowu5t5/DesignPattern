/*
 * @Description: 怎么使用适配器模式
 * @Author: 5t5
 * @Time: 2024/4/12 16:11
 */

import DatabaseAdapter from '../AdapterPattern'

// 使用ES6类语法定义旧的数据库接口
class OldDatabase {
    operate() {
        // 旧的数据库操作
        console.log('Operation on old database')
    }
}

// 使用ES6类语法定义新的数据库接口
class NewDatabase {
    request() {
        // 新的数据库操作
        console.log('Operation on new database')
    }
}

// 使用旧的数据库接口
const oldDB = new OldDatabase()
oldDB.operate() // 输出: Operation on old database

// 使用适配器与新的数据库接口
const newDB = new NewDatabase()
const adaptedDB = new DatabaseAdapter(newDB)
adaptedDB.operate() // 输出: Operation on new database
