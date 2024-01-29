import path from 'path'
import { readFile } from 'fs/promises'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import './files/c.js'

const random = Math.random();

let unknownObject;

unknownObject = JSON.parse(await readFile(path.resolve(path.resolve(), `src/modules/files/${random > 0.5 ? 'a' : 'b'}.json`), {encoding: 'utf8'}))

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

