import {env} from 'process'

const parseEnv = () => {
    const filteredVars = []
    Object.entries(env).forEach(([key, val]) => {
        if (key.includes('RSS_')) {
            filteredVars.push(`${key}=${val}`)
        }
    })
    console.log(filteredVars.join('; '))
};

parseEnv();