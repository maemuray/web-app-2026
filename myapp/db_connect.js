require('dotenv').config();

const { Pool } = require('pg');

console.log(process.env.DB_PASSWORD);

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

async function main() {
  try {
    const client = await pool.connect();

    console.log('DBに接続しました');

    client.release();
    await pool.end();

    console.log('接続終了');
  } catch (err) {
    console.error(err);
  }
}

main();