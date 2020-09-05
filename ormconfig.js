const { isPropertyAccessChain } = require('typescript');

console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
console.log('process.env.DATABASE_URL :>> ', process.env.ENTITIES);
console.log('process.env.DATABASE_URL :>> ', process.env.MIGRATIONS);
console.log('RUNNING!');
module.exports = {
  type: 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,

  logging: true,
  synchronize: process.env.DB_SYNC == 'true',
  cache: {
    type: 'redis',
    options: {
      host: process.env.DB_HOST,
      port: 6379,
    },
  },
  entities: [process.env.ENTITIES],
  migrations: [process.env.MIGRATIONS],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models/',
  },
};
