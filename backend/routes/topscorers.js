import express from 'express';
const router = express.Router();
import {
  // getTopScorerByLeagueAndYear,
  getTopScorerByYear,
  getTopScorerByName,
  getTopScorerByLeague,
  updatePlayer,
  deletePlayer,
  getPlayers,
  getTopScorerByGoals,
} from '../models/topscorer.js';

router.get('/', async function (req, res, next) {
  if (req.query.league){
    const league = String(req.query.league);
    // console.log(league);
    const data = await getTopScorerByLeague(league);
    next();
    return res.json({ success: true, payload: data });
  }
  if (req.query.goals) {
    const goals = Number(req.query.goals);
// console.log(goals);
const data = await getTopScorerByGoals(goals);
next()
return res.json({success: true, payload: data});
  } else {
  const data = await getPlayers();
  next();
  return res.json({ success: true, payload: data });}
});

router.patch('/id/:id', async function (req, res, next) {
  const id = Number(req.params.id);
  const update = req.body;
  const data = await updatePlayer(id, update);
  next();
  return res.json({ success: true, payload: data });
});
router.get('/surname/:surname', async function (req, res, next) {
  const name = req.params.surname;
  const data = await getTopScorerByName(name);
  next();
  return res.json({ success: true, payload: data });
});

// router.get('/league/:league', async function (req, res, next) {
//   const league = String(req.params.league);
//   console.log(league);
//   const data = await getTopScorerByLeague(league);
//   next();
//   return res.json({ success: true, payload: data });
// });
router.get('/year/:year', async function (req, res, next) {
  const year = Number(req.params.year);
  const data = await getTopScorerByYear(year);
  next();
  return res.json({ success: true, payload: data });
});

// router.get('/year/:year/:league', async function (req, res, next) {
//   const year = Number(req.params.year);
//   const league = String(req.params.league);
//   const data = await getTopScorerByLeagueAndYear(year, league);
//   next();
//   return res.json({ success: true, payload: data });
// });

router.delete('/delete/:id', async function (req, res, next) {
  const id = Number(req.params.id);
  console.log("route req", req)
  const data = await deletePlayer(id);
  next();
  return res.json({ success: true, payload: data });
});

export default router;
