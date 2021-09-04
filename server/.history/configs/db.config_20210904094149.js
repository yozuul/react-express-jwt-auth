const env = process.env
// Posgres config
const pgConfig = {
    host: env.POSGRES_HOST,
    port: env.POSGRES_HOST,
    user: env.POSGRES_USER,
    password: env.POSGRES_PASS,
    database: env.POSGRES_DB,
    dialect: 'postgres'
}


export { pgConfig }