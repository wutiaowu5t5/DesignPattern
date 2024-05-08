/*
 * @Description: 怎么使用组合模式
 * @Author: 5t5
 * @Time: 2024/4/24 11:46
 */

// 使用示例
/**
 * 这段代码展示了使用组合模式来管理文件系统对象的例子。
 * 首先，导入了组合模式中的 Directory 和 File 类。
 * 然后，创建了一个根目录 root，两个子目录 dir1 和 dir2，以及两个文件 file1 和 file2。
 * 接着，将 dir1 和 file1 添加到 root 目录中，将 file2 添加到 dir1 目录中。
 * 最后，对 root 目录执行 operation 操作。
 */

import { Directory, File } from '../CombinationPattern'

// 创建根目录和一系列子目录及文件
const root = new Directory('root')
const dir1 = new Directory('dir1')
const dir2 = new Directory('dir2')
const file1 = new File('file1')
const file2 = new File('file2')

// 将子目录和文件添加到根目录中
root.add(dir1)
root.add(file1)
root.add(dir2)
// 将文件添加到子目录中
dir1.add(file2)

// 对根目录执行操作（如打印文件结构等）
root.operation()