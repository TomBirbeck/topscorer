import pool from '../db/index.js'

export async function getPlayers(){
    const res = await pool.query('SELECT * FROM players;');
    return res.rows;
}

export async function getTopScorerByYear(year) {
    const res = await pool.query('SELECT * FROM $1);', [`table_${year}`]);
    return res.rows;
}

export async function getTopScorerByLeagueAndYear(league, year) {
    const res = await pool.query('SELECT * FROM $1 WHERE league = $2;', [year, league]);
}

//SELECT table_name FROM information_schema.tables
// WHERE table_schema = 'your_database_name';