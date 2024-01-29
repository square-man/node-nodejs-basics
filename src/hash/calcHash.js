import { createHash } from 'crypto'
import fs from 'fs'

const calculateHash = async () => {
    const hash = createHash('sha256')
    const readableStream = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt')
    readableStream.on('readable', () => {
        const data = readableStream.read()
        if (data) {
            hash.update(data)
        } else {
            console.log(hash.digest('hex'))
        }
    })
};

await calculateHash();