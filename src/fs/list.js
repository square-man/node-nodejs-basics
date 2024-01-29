import fs from 'fs'
import path from 'path'

const list = async () => {
    try {
        const filePath = path.resolve(path.resolve(), 'src/fs/files')
        await fs.promises.access(filePath)
        const filesNames = await fs.promises.readdir(filePath)
        console.log(filesNames)
    } catch {
        throw new Error('FS operation failed')
    }
};

await list();