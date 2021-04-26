import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    port: 3306,
    host: "ssm-db.cpqdjt8e60xc.us-east-1.rds.amazonaws.com",
    username: "root",
    password: "password",
    database: "ssm-db",
    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    // dropSchema: true,
}  

export = config