import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

require('dotenv').config()

const config : PostgresConnectionOptions= {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    database: process.env.DB_NAME || 'nestjs_pg',
    entities: ["dist/src/**/*.entity{.ts,.js}"],
    synchronize: true,
}

export default config;