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
    'INSERT INTO topscorers (firstname, surname, dob, nationality, club, img, season, league, appearances, goals, gpa) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *;',
    [
      player.firstname,
      player.surname,
      player.dob,
      player.nationality,
      player.club,
      player.img,
      player.season,
      player.league,
      player.appearances,
      player.goals,
      player.gpa,
    ]
  );
  return res.rows;
}

export async function updatePlayer(id, update) {
  console.log('id', id);
  console.log('updating', Object.keys(update));
  let key = Object.keys(update);
  let keya = key.toString();
  console.log('key', key);
  console.log('keya', keya);
  let value = Object.values(update);
  let valuea = value.toString();
  let valueb = Number(value);
  console.log('value', value);
  console.log('valuea', valuea);
  console.log('valueb', valueb);

  if (keya === 'firstname') {
    const res = await pool.query(
      `UPDATE topscorers SET firstname = $1 WHERE id = $2 RETURNING *;`,
      [valuea, id]
    );
    return res.rows;
  }
  if (keya === 'surname') {
    console.log('inside', valuea);
    const res = await pool.query(
      `UPDATE topscorers SET surname = $1 WHERE id = $2 RETURNING *;`,
      [valuea, id]
    );
    console.log('res', res);
    return res.rows;
  }
  if (keya === 'dob') {
    const res = await pool.query(
      `UPDATE topscorers SET dob = $1 WHERE id = $2 RETURNING *;`,
      [valuea, id]
    );
    return res.rows;
  }
  if (keya === 'nationality') {
    const res = await pool.query(
      `UPDATE topscorers SET nationality = $1 WHERE id = $2 RETURNING *;`,
      [valuea, id]
    );
    return res.rows;
  }
  if (keya === 'club') {
    const res = await pool.query(
      `UPDATE topscorers SET club = $1 WHERE id = $2 RETURNING *;`,
      [valuea, id]
    );
    return res.rows;
  }
  if (keya === 'img') {
    const res = await pool.query(
      `UPDATE topscorers SET img = $1 WHERE id = $2 RETURNING *;`,
      [valuea, id]
    );
    return res.rows;
  }
  if (keya === 'season') {
    const res = await pool.query(
      `UPDATE topscorers SET season = $1 WHERE id = $2 RETURNING *;`,
      [valueb, id]
    );
    return res.rows;
  }
  if (keya === 'league') {
    const res = await pool.query(
      `UPDATE topscorers SET league = $1 WHERE id = $2 RETURNING *;`,
      [valuea, id]
    );
    return res.rows;
  }
  if (keya === 'appearances') {
    const res = await pool.query(
      `UPDATE topscorers SET appearances = $1 WHERE id = $2 RETURNING *;`,
      [valueb, id]
    );
    return res.rows;
  }
  if (keya === 'goals') {
    const res = await pool.query(
      `UPDATE topscorers SET goals = $1 WHERE id = $2 RETURNING *;`,
      [valueb, id]
    );
    return res.rows;
  }
  if (keya === 'gpa') {
    const res = await pool.query(
      `UPDATE topscorers SET gpa = $1 WHERE id = $2 RETURNING *;`,
      [valueb, id]
    );
    return res.rows;
  }
}

export async function deletePlayer(id) {
  const res = await pool.query(
    'DELETE FROM topscorers WHERE id = $1 RETURNING *',
    [id]
  );
  // console.log(res);
  return { message: `player with id: ${id} has been deleted` };
}

//SELECT table_name FROM information_schema.tables
// WHERE table_schema = 'your_database_name';
