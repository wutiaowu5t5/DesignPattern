/*
 * @Description: 结构型-代理模式（Class）
 * @Author: 5t5
 * @Time: 2024/4/12 17:27
 */

// 定义处理程序对象
// 处理程序对象包含了代理对象的行为拦截逻辑
const handler = {
    // 拦截对目标对象属性的读取操作
    get(target, property, receiver) {
        console.log(`Getting property '${property}'`);
        // 使用 Reflect.get 方法获取目标对象的属性值
        // 你可以在这里添加额外的逻辑，例如权限控制、日志记录等
        return Reflect.get(target, property, receiver);
    },
    // 拦截对目标对象属性的设置操作
    set(target, property, value, receiver) {
        console.log(`Setting property '${property}' to '${value}'`);
        // 使用 Reflect.set 方法设置目标对象的属性值
        // 你可以在这里添加额外的逻辑，例如数据验证、权限控制等
        return Reflect.set(target, property, value, receiver);
    },
    // 拦截对目标对象方法的调用操作
    apply(target, thisArg, argumentsList) {
        console.log(`Calling function with arguments: ${argumentsList}`);
        // 使用 Reflect.apply 方法调用目标对象的方法
        // 你可以在这里添加额外的逻辑，例如日志记录、权限控制等
        return Reflect.apply(target, thisArg, argumentsList);
    },
}

export default handler