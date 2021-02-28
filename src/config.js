module.exports = {
    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || '54.188.236.107',
        user: process.env.DATABASE_USER || 'nmdevel',
        password: process.env.DATABASE_PASSWORD || 'nmdevel',
        database: process.env.DATABASE_NAME || 'db_links'
    },
    port: process.env.PORT || 4000
};