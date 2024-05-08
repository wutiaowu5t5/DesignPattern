/*
 * @Description: 模板方法模式子类-茶
 * @Author: 5t5
 * @Time: 2024/5/8 10:53
 */

/**
 * Tea 类继承自 Beverage 类，实现了冲泡茶的具体步骤。
 */
import Beverage from '../TemplateMethodPattern'

class Tea extends Beverage {
    /**
     * 冲泡茶叶的方法。
     * 此方法为 Tea 类实现的抽象方法，具体冲泡过程为：冲泡茶叶。
     */
    brew() {
        console.log('冲泡茶叶')
    }
    
    /**
     * 添加调料的方法。
     * 对于茶来说，通常不添加额外的调料，因此此方法实现为不进行任何操作。
     */
    addCondiments() {
        console.log('不加东西')
    }
}

export default Tea