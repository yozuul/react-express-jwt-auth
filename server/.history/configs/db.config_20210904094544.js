const env = process.env
// Posgres config
const pgConfig = {
    host: env.PG_HOST,
    port: env.PG_PORT,
    user: env.PG_USER,
    password: env.PG_PASS,
    database: env.PG_DB
}


export { pgConfig }