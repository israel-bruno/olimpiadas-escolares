import * as Joi from 'types-joi'

const EnvironmentSchema = Joi.object({
  DATABASE_USER: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
})

export default EnvironmentSchema
