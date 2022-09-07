// import request from 'supertest';
// import app from '../app';
import { test, expect } from '@jest/globals';
import { getTopScorerByYear, getTopScorerByLeagueAndYear } from './players.js';

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
    const actual = getTopScorerByYear(1992);

    const expected = {
      success: true,
      data: [
        {
          firstName: expect.any(String),
          surName: expect.any(String),
          dob: expect.any(String),
          club: expect.any(String),
          imgURL: expect.any(String),
          season: '1992',
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
      data: [
        {
          firstName: expect.any(String),
          surName: expect.any(String),
          dob: expect.any(String),
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


});
