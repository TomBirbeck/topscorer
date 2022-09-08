import express from 'express';
const router = express.Router();
import {
  getTopScorerByLeagueAndYear,
  getTopScorerByYear,
  getTopScorerByName,
  getTopScorerByLeague,
} from '../models/topscorer.js';

router.get('/', async function (req, res, next) {
  next();
  return res.json({ success: true, message: 'Page not used' });
});
router.get('/surname/:surname', async function (req, res, next) {
  const name = req.params.surname;
  const data = await getTopScorerByName(name);
  next();
  return res.json({ success: true, payload: data });
});

router.get('/league/:league', async function (req, res, next) {
  const league = String(req.params.league);
  console.log(league);
  const data = await getTopScorerByLeague(league);
  next();
  return res.json({ success: true, payload: data });
});
export default router;
router.get('/:year', async function (req, res, next) {
  const year = Number(req.params.year);
  const data = await getTopScorerByYear(year);
  next();
  return res.json({ success: true, payload: data });
});

router.get('/:year/:league', async function (req, res, next) {
  const year = Number(req.params.year);
  const league = String(req.params.league);
  const data = await getTopScorerByLeagueAndYear(year, league);
  next();
  return res.json({ success: true, payload: data });
});
