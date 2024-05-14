const z = require('zod')

const packageJSON = require('./package.json')
const path = require('path')
const APP_ENV = process.env.APP_ENV ?? 'dev'
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`)

require('dotenv').config({
  path: envPath,
})

const BUNDLE_ID = 'com.flexforge'
const PACKAGE = 'com.flexforge'
const NAME = 'workout-tracker-mobile'
const SCHEME = 'workout-tracker-mobile'

const withEnvSuffix = (name) =>
  APP_ENV === 'prod' ? name : `${name}.${APP_ENV}`

const client = z.object({
  APP_ENV: z.enum(['prod', 'staging', 'dev']),
  NAME: z.string(),
  SCHEME: z.string(),
  PACKAGE: z.string(),
  BUNDLE_ID: z.string(),
  VERSION: z.string(),

  VAR_STRING: z.string(),
  VAR_NUMBER: z.number(),
  VAR_BOOL: z.boolean(),
})

const buildTime = z.object({
  VAR_BUILD: z.string(),
})

const _clientEnv = {
  APP_ENV,
  NAME: NAME,
  SCHEME: SCHEME,
  BUNDLE_ID: withEnvSuffix(BUNDLE_ID),
  PACKAGE: withEnvSuffix(PACKAGE),
  VERSION: packageJSON.version,

  VAR_STRING: process.env.VAR_STRING,
  VAR_NUMBER: Number(process.env.VAR_NUMBER),
  VAR_BOOL: process.env.VAR_BOOL === 'true',
}

const _buildEnv = {
  VAR_BUILD: process.env.VAR_BUILD,
}

const _env = {
  ..._clientEnv,
  ..._buildEnv,
}

const merged = buildTime.merge(client)
const parsed = merged.safeParse(_env)

if (parsed.success === false) {
  console.error(
    '❌ Invalid env variables:',
    parsed.error.flatten().fieldErrors,

    `\n❌ Missing variables in .env.${APP_ENV} file, Make sure all required variables are defined in the .env.${APP_ENV} file.`,
    `\n💡 Tip: If you recently updated the .env.${APP_ENV} file and the error still persists, try restarting the server with the -cc flag to clear the cache.`
  )
  throw new Error(
    'Invalid environment variables, Check terminal for more details '
  )
}

const Env = parsed.data
const ClientEnv = client.parse(_clientEnv)

module.exports = {
  Env,
  ClientEnv,
  withEnvSuffix,
}
