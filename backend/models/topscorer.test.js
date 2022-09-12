// import request from 'supertest';
// import app from '../app';
import { test, expect } from '@jest/globals';
import app from '../app.js';
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
  //   test('when getPlayers function is called, all players are returned', () => {
  //     async function getPlayers() {
  //       return {
  //         success: true,
  //         data: [
  //           {
  //             firstName: 'Dave',
  //             surName: 'Test',
  //             dob: '12-04-1990',
  //             club: 'AEK Athens',
  //             imgURL: 'https://www.img.com',
  //           },
  //         ],
  //       };
  //     }
  //     const actual = getPlayers();
  //     const expected = {
  //       success: true,
  //       data: [
  //         {
  //           firstName: expect.any(String),
  //           surName: expect.any(String),
  //           dob: expect.any(String),
  //           club: expect.any(String),
  //           imgURL: expect.any(String),
  //         },
  //       ],
  //     };

  //     expect(actual).resolves.toStrictEqual(expected);
  //   });

  test('when getTopScorerByYear function is called, returns all players from that season', () => {
    const actual = getTopScorerByYear(1993);

    const expected = {
      success: true,
      payload: [
        {
          firstName: expect.any(String),
          surName: expect.any(String),
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          imgURL: expect.any(String),
          season: 1993,
          league: expect.any(String),
          appearances: expect.any(Number),
          goals: expect.any(Number),
          GPG: expect.any(Number),
        },
      ],
    };

    expect(actual).resolves.toStrictEqual(expected);
  });

  test('when getTopScorerByLeague function is called, returns all players from that season', () => {
    const actual = getTopScorerByLeagueAndYear(1993, 'Ligue 1');

    const expected = {
      success: true,
      payload: [
        {
          firstName: expect.any(String),
          surName: expect.any(String),
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          imgURL: expect.any(String),
          season: 1993,
          league: 'Ligue 1',
          appearances: expect.any(Number),
          goals: expect.any(Number),
          GPG: expect.any(Number),
        },
      ],
    };

    expect(actual).resolves.toStrictEqual(expected);
  });

  test('when getTopScorerByByName function is called, returns all players with that surname', () => {
    const actual = getTopScorerByName('simons');

    const expected = {
      success: true,
      payload: [
        {
          firstName: expect.any(String),
          surName: 'simons',
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          imgURL: expect.any(String),
          season: expect.any(Number),
          league: expect.any(String),
          appearances: expect.any(Number),
          goals: expect.any(Number),
          GPG: expect.any(Number),
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
          firstName: expect.any(String),
          surName: expect.any(String),
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          imgURL: expect.any(String),
          season: expect.any(Number),
          league: 'EPL',
          appearances: expect.any(Number),
          goals: expect.any(Number),
          GPG: expect.any(Number),
        },
      ],
    };

    expect(actual).resolves.toStrictEqual(expected);
  });

  test('creates new player profile', async () => {
    const player = {
      firstName: 'Steve',
      surName: 'Bishop',
      dob: '13/09/1983',
      nationality: 'English',
      club: 'Chelsea',
      imgURL: 'www.google.com',
      season: 1994,
      league: 'EPL',
      appearances: 30,
      goals: 15,
      GPG: 0.5,
    };

    const actual = createNewPlayer(player);

    const expected = {
      firstName: 'Steve',
      surName: 'Bishop',
      dob: '13/09/1983',
      nationality: 'English',
      club: 'Chelsea',
      imgURL: 'www.google.com',
      season: 1994,
      league: 'EPL',
      appearances: 30,
      goals: 15,
      GPG: 0.5,
    };

    expect(actual).resolves.toStrictEqual(expected);

  })

  test('when updatePlayer function is called with an id and value, the correct player is updated in the db', async () => {
    const id = 2;
    const update = { season: 1997 };

    const actual = updatePlayer(id, update);

    const expected = {
      id: 2,
      firstName: expect.any(String),
          surName: expect.any(String),
          dob: expect.any(String),
          nationality: expect.any(String),
          club: expect.any(String),
          imgURL: expect.any(String),
          season: 1997,
          league: expect.any(String),
          appearances: expect.any(Number),
          goals: expect.any(Number),
          GPG: expect.any(Number),
    };

    expect(actual).resolves.toStrictEqual(expected);

  });

  test('when deleteplayer function is called with an certain id, that data-set is removed from the db', async () => {
    const id = 1

    const actual = deletePlayer(id)

    const expected = {
      message: `player with id: ${id} has been deleted`
    }

    expect(actual).resolves.toStrictEqual(expected);

  });

});

