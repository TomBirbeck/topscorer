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
import { expressjwt } from 'express-jwt';
import jwks from 'jwks-rsa';
const jwt = expressjwt;

export const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.URI,
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: [process.env.ALGORITHMS],
});

router.get('/', async function (req, res, next) {
  try {
    if (req.query.league) {
      const league = String(req.query.league);
      const data = await getTopScorerByLeague(league);
      next();
      return res.json({ success: true, payload: data });
    }
    if (req.query.goals) {
      const goals = Number(req.query.goals);
      const data = await getTopScorerByGoals(goals);
      next();
      return res.json({ success: true, payload: data });
    } else {
      const data = await getPlayers();
      next();
      return res.json({ success: true, payload: data });
    }
  } catch (error) {
    res.status(404);
    res.json({
      success: false,
      message: 'Could not find what you were looking for',
    });
  }
});

router.patch('/id/:id', jwtCheck, async function (req, res, next) {
  try {
    const id = Number(req.params.id);
    const update = req.body;
    const data = await updatePlayer(id, update);
    next();
    return res.json({ success: true, payload: data });
  } catch (error) {
    res.status(404);
    res.json({
      success: false,
      message: 'Could not find what you were looking for',
    });
  }
});

router.get('/surname/:surname', async function (req, res, next) {
  try {
    const name = req.params.surname;
    const data = await getTopScorerByName(name);
    next();
    return res.json({ success: true, payload: data });
  } catch (error) {}
});

router.get('/year/:year', async function (req, res, next) {
  try {
    const year = Number(req.params.year);
    const data = await getTopScorerByYear(year);
    next();
    return res.json({ success: true, payload: data });
  } catch (error) {
    res.status(404);
    res.json({
      success: false,
      message: 'Could not find what you were looking for',
    });
  }
});

router.delete('/delete/:id', jwtCheck, async function (req, res, next) {
  try {
    const id = Number(req.params.id);
    console.log('route req', req);
    const data = await deletePlayer(id);
    next();
    return res.json({ success: true, payload: data });
  } catch (error) {
    res.status(404);
    res.json({
      success: false,
      message: 'Could not find what you were looking for',
    });
  }
});

export default router;
