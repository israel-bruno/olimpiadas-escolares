import EnvironmentSchema from 'src/schemas/env/EnvironmentSchema'
import * as Joi from 'types-joi'

if (!EnvironmentSchema || !EnvironmentSchema['_ids'] || !EnvironmentSchema['_ids']['_byKey']) {
  console.error('EnvironmentSchema is not defined')
  process.exit(1)
}

const processEnv = [...EnvironmentSchema['_ids']['_byKey']].reduce((acc, it) => {
  acc[it[0]] = process.env[it[0]]
  return acc
}, {})

const ENVIRONMENT = Joi.attempt(processEnv, EnvironmentSchema)

export default ENVIRONMENT as NonNullable<typeof ENVIRONMENT>
