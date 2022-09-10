import pool from '../index.js'
import players from '../players.js'

async function populateTopScorersTable() {
	for (let i = 0; i < players.length; i++) {
await pool.query('INSERT INTO topscorers (firstname, surname, dob, nationality, club, season, league, img, appearances, goals, gpa) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [
    players[i].firstname,
    players[i].surname,
    players[i].dob,
    players[i].nationality,
    players[i].club,
    players[i].season,
    players[i].league,
    players[i].img,
    players[i].appearances,
    players[i].goals,
    players[i].gpa
])
    }
}

populateTopScorersTable()