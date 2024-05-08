/*
 * @Description: 怎么使用访问者模式
 * @Author: 5t5
 * @Time: 2024/5/7 18:22
 */

import TextFile from '../SubClass/TextFile'
import ImageFile from '../SubClass/ImageFile'
import AudioFile from '../SubClass/AudioFile'
import { CompressVisitor, EncryptVisitor, PrintVisitor } from '../VisitorPattern'

const textFile = new TextFile("document.txt", "This is the content of the text file.")
const imageFile = new ImageFile("photo.jpg", "Image data...")
const audioFile = new AudioFile("music.mp3", "Audio data...")

const printVisitor = new PrintVisitor()
const compressVisitor = new CompressVisitor()
const encryptVisitor = new EncryptVisitor()

textFile.accept(printVisitor)
imageFile.accept(printVisitor)
audioFile.accept(printVisitor)

textFile.accept(compressVisitor)
imageFile.accept(compressVisitor)
audioFile.accept(compressVisitor)

textFile.accept(encryptVisitor)
imageFile.accept(encryptVisitor)
audioFile.accept(encryptVisitor)