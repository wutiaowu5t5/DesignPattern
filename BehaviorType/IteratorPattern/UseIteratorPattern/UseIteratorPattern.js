/*
 * @Description: 怎么使用迭代器模式
 * @Author: 5t5
 * @Time: 2024/4/25 10:07
 */

import ListCollection from '../IteratorPattern'

/**
 * 向列表中添加各种类型的元素。
 * 包括数字、函数、对象和字符串。
 */
ListCollection.add(1);
ListCollection.add(function() { console.log('Function executed!') })
ListCollection.add({ key: 'value' })
ListCollection.add('Text')

/**
 * 遍历列表中的每个元素，并尝试执行它们。
 * 如果元素是函数，则执行该函数；
 * 如果元素是字符串或其他类型，则仅在控制台打印。
 */
ListCollection.forEachExecuteOrLog()
