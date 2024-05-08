/*
 * @Description: 模板方法模式子类-茶
 * @Author: 5t5
 * @Time: 2024/5/8 10:53
 */

import Beverage from '../TemplateMethodPattern'

class Tea extends Beverage {
    brew() {
        console.log('冲泡茶叶')
    }
    
    addCondiments() {
        console.log('不加东西')
    }
}

export default Tea