// const { Pool } = require('pg');

// const devConfig = {
    //     user: process.env.PG_USER,
    //     password: process.env.PG_PASSWORD,
    //     host: process.env.PG_HOST,
    //     database: process.env.PG_DATABASE,
    //     port: process.env.PG_PORT,
    //     sslmode: require
    // }
    
    // const prodConfig = {
        //     connectionString: process.env.DATABASE_URL,
        //     ssl: {
            //         rejectUnauthorized: false
            //     }
            // }
            
            // const pool = new Pool(process.env.NODE_ENV === 'production' ? prodConfig : devConfig);
            
            // module.exports = {
                //     query: (text, params) => pool.query(text, params)
                // };
                
require('dotenv').config();
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, 'admin', {
    host: process.env.PG_HOST,
    dialect: 'postgres'
});