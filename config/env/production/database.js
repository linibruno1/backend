// CONFIG INFO DATABASE PRODUCTION MODE
module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('MYSQLHOST', '127.0.0.1'),
        port: env.int('MYSQLPORT', 3306),
        database: env('MYSQLDATABASE', 'strapi'),
        user: env('MYSQLUSER', 'strapi'),
        password: env('MYSQLPASSWORD', 'strapi'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      debug: false,
    },
  });