import express from 'express';
const router = express.Router();
import {
  getTopScorerByLeagueAndYear,
  getTopScorerByYear,
  getTopScorerByName,
} from '../models/topscorer.js';
router.get('/surname/:surname', async function (req, res, next) {
  console.log(req.params);
  const name = req.params.surname;
  const data = await getTopScorerByName(name);
  return res.json({ success: true, payload: data });
});

router.get('/:year', async function (req, res, next) {
  const year = Number(req.params.year);
  const data = await getTopScorerByYear(year);
  return res.json({ success: true, payload: data });
});

router.get('/:year/:league', async function (req, res) {
  const year = Number(req.params.year);
  const league = String(req.params.league);
  const data = await getTopScorerByLeagueAndYear(year, league);
  return res.json({ success: true, payload: data });
});

export default router;
