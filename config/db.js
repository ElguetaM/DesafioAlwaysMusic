import pkg from "pg";
import "dotenv/config";

const { Pool } = pkg;
const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const pool = new Pool({
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  user: DB_USER,
  allowExitOnIdle: true,
});

export default pool;
