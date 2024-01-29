import fs from 'fs'
import path from 'path'

const read = async () => {
    try {
        const filePath = path.resolve(path.resolve(), 'src/fs/files/fileToRead.txt')
        await fs.promises.access(filePath)
        const content = await fs.promises.readFile(filePath, {encoding: 'utf8'})
        console.log(content)
    } catch {
        throw new Error('FS operation failed')
    }

};

await read();