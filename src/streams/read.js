import fs from 'fs'

const read = async () => {
    const readableStream = await fs.createReadStream('src/streams/files/fileToRead.txt')

    readableStream.on('data', chunk => {
        process.stdout.write(chunk)
    })
};

await read();