import fs from 'fs'
import path from 'path'

const create = () => {
    const filePath = path.resolve(path.resolve(), 'src/fs/files/fresh.txt')
    
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed')
        } else {
            fs.writeFileSync(filePath, 'I am fresh and young')
        }
    })
};

await create();