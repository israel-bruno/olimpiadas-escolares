import { DataSource } from 'typeorm'
import ENVIRONMENT from 'src/configuration/EnvironmentConfiguration'
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: ENVIRONMENT.DATABASE_HOST,
        port: ENVIRONMENT.DATABASE_PORT,
        username: ENVIRONMENT.DATABASE_USER,
        password: ENVIRONMENT.DATABASE_PASSWORD,
        database: ENVIRONMENT.DATABASE_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      })
      return dataSource.initialize()
    },
  },
]
