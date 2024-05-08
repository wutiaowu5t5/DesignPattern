/*
 * @Description: 模板方法模式子类-咖啡
 * @Author: 5t5
 * @Time: 2024/5/8 10:53
 */

import Beverage from '../TemplateMethodPattern'

class Coffee extends Beverage {
    brew() {
        console.log('冲泡咖啡')
    }
    
    addCondiments() {
        console.log('加糖和牛奶')
    }
}

export default Coffee