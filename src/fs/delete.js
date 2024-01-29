import fs from 'fs'
import path from 'path'

const remove = async () => {
    const filePath = path.resolve(path.resolve(), 'src/fs/files/fileToRemove.txt')
    fs.access(filePath, fs.constants.F_OK, async err => {
        if (!err) {
            await fs.unlink(filePath, () => {})
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await remove();