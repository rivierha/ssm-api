import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    port: 3306,
    host: "localhost",
    username: "root",
    password: "password",
    database: "ssm_db",
    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    // dropSchema: true,
}  

export = config