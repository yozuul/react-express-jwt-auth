const env = process.env
// Posgres config
const pg_config = {
    host: env.PG_HOST,
    port: env.PG_PORT,
    user: env.PG_USER,
    password: env.PG_PASS,
    database: env.PG_DB
}


export { pg_config }