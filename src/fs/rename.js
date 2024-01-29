import fs from 'fs'
import path from 'path'

const rename = async () => {
    const wrongFileName = 'wrongFilename.txt'
    const properFileName = 'properFilename.md'
    const filePath = path.resolve(path.resolve(), `src/fs/files/${wrongFileName}`)
    const newFilePath = filePath.replace(wrongFileName, properFileName)

    fs.access(filePath, fs.constants.F_OK, async (err) => {
        if (!err && !fs.existsSync(newFilePath)) {
            await fs.promises.rename(filePath, newFilePath)
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await rename();