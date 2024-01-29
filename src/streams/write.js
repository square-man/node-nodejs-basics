import fs from 'fs'

const write = async () => {
    const wstream = fs.createWriteStream('src/streams/files/fileToWrite.txt')
    process.stdin.pipe(wstream)
};

await write();