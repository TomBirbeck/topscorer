import pool from '../db/index.js';

export async function getPlayers() {
  const res = await pool.query('SELECT * FROM players;');
  return res.rows;
}

export async function getTopScorerByName(name) {
  console.log(name);
  const res = await pool.query('SELECT * FROM topscorers WHERE surname = $1', [
    name,
  ]);
  return res.rows;
}

export async function getTopScorerByYear(year) {
  const res = await pool.query('SELECT * FROM topscorers WHERE season = $1', [
    year,
  ]);
  return res.rows;
}

export async function getTopScorerByLeagueAndYear(year, league) {
  const res = await pool.query(
    'SELECT * FROM topscorers WHERE season = $1 AND league = $2;',
    [year, league]
  );
  return res.rows;
}

export async function getTopScorerByLeague(league) {
  const res = await pool.query('SELECT * FROM topscorers WHERE league = $1;', [
    league,
  ]);
  return res.rows;
}

//SELECT table_name FROM information_schema.tables
// WHERE table_schema = 'your_database_name';
