"use strict";
const config = {
    type: 'mysql',
    port: 3306,
    host: "localhost",
    username: "root",
    password: "mysqL@507",
    database: "ssm_db",
    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    synchronize: true,
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map