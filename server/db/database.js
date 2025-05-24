const pg = require('pg');
const { Pool } = pg;
const dotenv = require('dotenv');
dotenv.config();    

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // allows self-signed RDS certs; use proper cert in prod
  },
});

pool.connect(()=>{
    console.log("Connected to PostgreSQL database");
})

module.exports = {pool}