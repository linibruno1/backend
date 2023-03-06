// INFO DATABASE PRODUCTION MODE
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', '127.0.0.1'),
        port: env.int('PGPORT', 5432),
        database: env('PGDATABASE', 'strapi'),
        user: env('PGUSER', 'strapi'),
        password: env('PGPASSWORD', 'strapi'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      debug: false,
    },
  });