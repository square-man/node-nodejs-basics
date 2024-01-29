import fs from 'fs/promises'
import path from 'path'

const copy = async () => {
    const __dirname = path.resolve();
    const targetPath = path.resolve(__dirname, 'src/fs/files/')
    const pathForCopies = path.resolve(__dirname, 'src/fs/files_copy/') 

    try {
        await fs.access(targetPath)
        await fs.mkdir(pathForCopies)

        const fileNames = await fs.readdir(targetPath)

        fileNames.forEach(async (fileName) => {
            await fs.copyFile(`${targetPath}/${fileName}`, `${pathForCopies}/${fileName}`)
        })
    } catch {
        throw new Error('FS operation failed')
    }
};

await copy();
