import {argv} from 'process'

const parseArgs = () => {
    const foundArgs = []
    argv.forEach((arg, idx) => {
        if (arg.includes('--')) {
            foundArgs.push(`${arg.replace('--', '')} is ${argv[idx + 1]}`)
        }
    })
    console.log(foundArgs.join(', '))
};

parseArgs();