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

export async function createNewPlayer(player) {
  const res = await pool.query(
    "INSERT INTO topscorers (firstname, surname, dob, club, imgURL, season, league, appearances, goals, GPG) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *;",
    [player.firstname, player.surname, player.dob, player.club, player.imgURL, player.season, player.league, player.appearances, player.goals, player.GPG]
  );
  return res.rows;
}

export async function updatePlayer(id, player) {
  console.log("player",Object.keys(player))
  let key = Object.keys(player)
  console.log("key", key)
  let value = Object.values(player)
  console.log("value", value)
  const res = await pool.query('UPDATE topscorers SET 1$ = $2 WHERE id = $3 RETURNING *;',[key, value, id] );
  return res.rows;
}

//SELECT table_name FROM information_schema.tables
// WHERE table_schema = 'your_database_name';
