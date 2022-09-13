// import request from 'supertest';
// import app from '../app';
import { test, expect } from '@jest/globals';
import {
  getTopScorerByYear,
  getTopScorerByLeagueAndYear,
  getTopScorerByName,
  getTopScorerByLeague,
  createNewPlayer,
  updatePlayer,
  deletePlayer,
} from './topscorer.js';

describe('tesing player models', () => {
  test('when getTopScorerByYear function is called, returns all players from that season', () => {
    const actual = getTopScorerByYear(1993);
    const expected = {
      success: true,
      payload: [
        {
          id: expect.any(Number),
          firstname: expect.any(String),
          surname: expect.any(String),
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          img: expect.any(String),
          season: 1993,
          league: expect.any(String),
          appearances: expect.any(Number),
          goals: expect.any(Number),
          gpa: expect.any(String),
        },
      ],
    };
    expect(actual).resolves.toStrictEqual(expected);
  });
  test('when getTopScorerByLeague function is called, returns all players from that season', () => {
    const actual = getTopScorerByLeagueAndYear(1996, 'Ligue 1');
    const expected = {
      success: true,
      payload: [
        {
          id: expect.any(Number),
          firstname: expect.any(String),
          surname: expect.any(String),
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          img: expect.any(String),
          season: 1996,
          league: 'ligue 1',
          appearances: expect.any(Number),
          goals: expect.any(Number),
          gpa: expect.any(String),
        },
      ],
    };
    expect(actual).resolves.toStrictEqual(expected);
  });
  test('when getTopScorerByByName function is called, returns all players with that surname', () => {
    const actual = getTopScorerByName('Simons');
    const expected = {
      success: true,
      payload: [
        {
          id: expect.any(Number),
          firstname: expect.any(String),
          surname: 'Simons',
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          img: expect.any(String),
          season: expect.any(Number),
          league: expect.any(String),
          appearances: expect.any(Number),
          goals: expect.any(Number),
          gpa: expect.any(String),
        },
      ],
    };
    expect(actual).resolves.toStrictEqual(expected);
  });
  test('when getTopScorerByLeague function is called, returns all players from that league', () => {
    const actual = getTopScorerByLeague('EPL');
    const expected = {
      success: true,
      payload: [
        {
          id: expect.any(Number),
          firstname: expect.any(String),
          surname: expect.any(String),
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          img: expect.any(String),
          season: expect.any(Number),
          league: 'epl',
          appearances: expect.any(Number),
          goals: expect.any(Number),
          gpa: expect.any(String),
        },
      ],
    };
    expect(actual).resolves.toStrictEqual(expected);
  });
  test('creates new player profile', async () => {
    const player = {
      firstname: 'Steve',
      surname: 'Bishop',
      dob: '13/09/1983',
      nationality: 'English',
      club: 'Chelsea',
      img: 'www.google.com',
      season: 1994,
      league: 'EPL',
      appearances: 30,
      goals: 15,
      gpa: 0.5,
    };
    const actual = createNewPlayer(player);
    const expected = [
      {
        id: expect.any(Number),
        firstname: 'Steve',
        surname: 'Bishop',
        dob: '13/09/1983',
        nationality: 'English',
        club: 'Chelsea',
        img: 'www.google.com',
        season: 1994,
        league: 'epl',
        appearances: 30,
        goals: 15,
        gpa: "0.5",
      },
    ];
    expect(actual).resolves.toStrictEqual(expected);
  });
  test('when updatePlayer function is called with an id and value, the correct player is updated in the db', async () => {
    const id = 2;
    const update = { surname: 'Peters' };
    const actual = await updatePlayer(id, update);
    const expected = [
      {
        id: 2,
        firstname: expect.any(String),
        surname: 'Peters',
        dob: expect.any(String),
        nationality: expect.any(String),
        club: expect.any(String),
        img: expect.any(String),
        season: expect.any(Number),
        league: expect.any(String),
        appearances: expect.any(Number),
        goals: expect.any(Number),
        gpa: expect.any(String),
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
  test('when deleteplayer function is called with an certain id, that data-set is removed from the db', async () => {
    const id = 5;
    const actual = deletePlayer(id);
    const expected = {
      message: `topscorer entry with id: ${id} has been deleted`,
    };
    expect(actual).resolves.toStrictEqual(expected);
  });
});
