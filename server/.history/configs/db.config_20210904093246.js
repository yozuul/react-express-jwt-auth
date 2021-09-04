
const env = process.env
console.log(env.DB_HOST)

export const db = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    dialect: 'postgres'
}