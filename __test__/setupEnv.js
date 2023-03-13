const { readFileSync } = require('fs')

const envVariables = readFileSync('.env.local', 'utf8')
  .split('\n')
  .reduce((envVars, i) => {
    const [variable, value] = i.split('=')
    envVars[variable] = value
    return envVars
  }, {})

process.env = Object.assign(process.env, envVariables)

export {}
