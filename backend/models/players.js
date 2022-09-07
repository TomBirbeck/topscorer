
export async function getPlayers(){
    const res = await pool.query('SELECT * FROM players;');
    return res.rows;
}