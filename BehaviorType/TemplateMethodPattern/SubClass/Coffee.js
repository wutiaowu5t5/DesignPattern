/*
 * @Description: 模板方法模式子类-咖啡
 * @Author: 5t5
 * @Time: 2024/5/8 10:53
 */

/**
 * Coffee 类继承自 Beverage 类，实现了冲泡咖啡以及添加糖和牛奶的具体步骤。
 */
import Beverage from '../TemplateMethodPattern'

class Coffee extends Beverage {
    /**
     * 冲泡咖啡的具体步骤。
     */
    brew() {
        console.log('冲泡咖啡')
    }
    
    /**
     * 添加糖和牛奶到咖啡中的具体步骤。
     */
    addCondiments() {
        console.log('加糖和牛奶')
    }
}

export default Coffee
