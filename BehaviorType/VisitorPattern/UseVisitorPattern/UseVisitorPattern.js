/*
 * @Description: 怎么使用访问者模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:22
 */

/**
 * 导入各种文件类型的子类和访问者模式的相关类。
 */
import TextFile from '../SubClass/TextFile'
import ImageFile from '../SubClass/ImageFile'
import AudioFile from '../SubClass/AudioFile'
import { CompressVisitor, EncryptVisitor, PrintVisitor } from '../VisitorPattern'

// 创建不同类型的文件实例
const textFile = new TextFile("document.txt", "This is the content of the text file.")
const imageFile = new ImageFile("photo.jpg", "Image data...")
const audioFile = new AudioFile("music.mp3", "Audio data...")

// 创建不同功能的访问者实例
const printVisitor = new PrintVisitor()
const compressVisitor = new CompressVisitor()
const encryptVisitor = new EncryptVisitor()


// 对所有文件进行打印访问
// 输出：
// Printing text file document.txt:
// This is the content of the text file.
textFile.accept(printVisitor)

// 输出：
// Printing image file photo.jpg
imageFile.accept(printVisitor)

// 输出：
// Printing audio file music.mp3
audioFile.accept(printVisitor)


// 对所有文件进行压缩访问
// 输出：
// Compressing text file document.txt
textFile.accept(compressVisitor)

// 输出：
// Compressing image file photo.jpg
imageFile.accept(compressVisitor)

// 输出：
// Compressing audio file music.mp3
audioFile.accept(compressVisitor)


// 对所有文件进行加密访问
// 输出：
// Encrypting text file document.txt
textFile.accept(encryptVisitor)

// 输出：
// Encrypting image file photo.jpg
imageFile.accept(encryptVisitor)

// 输出：
// Encrypting audio file music.mp3
audioFile.accept(encryptVisitor)