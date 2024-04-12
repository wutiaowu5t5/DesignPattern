/*
 * @Description: 结构型-适配器模式
 * @Author: 5t5
 * @Time: 2024/4/12 16:10
 */


// 使用ES6类语法定义适配器
class DatabaseAdapter {
    constructor(newDatabase) {
        this.database = newDatabase
    }
    
    operate() {
        this.database.request()
    }
}

export default DatabaseAdapter