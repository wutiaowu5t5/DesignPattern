/*
 * @Description: 结构型-代理模式（Proxy）
 * @Author: 5t5
 * @Time: 2024/4/12 17:27
 */

// 定义一个代理类
class ProxyHandler {
    constructor(target) {
        this.target = target;
    }
    
    // 拦截对目标对象的属性读取
    get(property) {
        console.log(`Getting property '${property}'`);
        if (property in this.target) {
            return this.target[property];
        } else {
            console.error(`Property '${property}' does not exist on target object.`);
            return undefined;
        }
    }
    
    // 拦截对目标对象的属性设置
    set(property, value) {
        console.log(`Setting property '${property}' to '${value}'`);
        if (property in this.target) {
            this.target[property] = value;
            return true;
        } else {
            console.error(`Property '${property}' does not exist on target object.`);
            return false;
        }
    }
    
    // 调用目标对象的方法
    apply(methodName, ...args) {
        console.log(`Calling method '${methodName}' with arguments: ${args}`);
        const method = this.target[methodName];
        if (typeof method === 'function') {
            return method.apply(this.target, args);
        } else {
            console.error(`Method '${methodName}' does not exist on target object.`);
            return undefined;
        }
    }
}

export default ProxyHandler