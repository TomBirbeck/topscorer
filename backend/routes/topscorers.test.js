import request from 'supertest';
import app from '../app';
import { test, expect } from '@jest/globals';

describe('route tests', () => {
  test('get player by year', async () => {
    await request(app).get('/topscorer/year/1993', (req, res) => {
      const expectedBody = {
        success: true,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            firstname: expect.any(String),
            surname: expect.any(String),
            dob: expect.any(String),
            club: expect.any(String),
            img: expect.any(String),
            season: 1993,
            league: expect.any(String),
            appearances: expect.any(Number),
            goals: expect.any(Number),
            gpg: expect.any(Number),
          }),
        ]),
      };
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toMatch(/json/);
      expect(res.body).toMatchObject(expectedBody);
    });
  });

  test('get top scorer by year and league working', async () => {
    await request(app).get('/topscorer/year/1992/Ligue 1', (req, res) => {
      const expectedBody = {
        success: true,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            firstname: expect.any(String),
            surname: expect.any(String),
            dob: expect.any(String),
            club: expect.any(String),
            img: expect.any(String),
            season: 1992,
            league: 'Ligue 1',
            appearances: expect.any(Number),
            goals: expect.any(Number),
            gpg: expect.any(Number),
          }),
        ]),
      };
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toMatch(/json/);
      expect(res.body).toMatchObject(expectedBody);
    });
  });

  test('get player by surname working', async () => {
    await request(app).get('/topscorer/surname/bishop', (req, res) => {
      const expectedBody = {
        success: true,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            firstname: expect.any(String),
            surname: 'Bishop',
            dob: expect.any(String),
            club: expect.any(String),
            img: expect.any(String),
            season: expect.any(Number),
            league: expect.any(String),
            appearances: expect.any(Number),
            goals: expect.any(Number),
            gpg: expect.any(Number),
          }),
        ]),
      };
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toMatch(/json/);
      expect(res.body).toMatchObject(expectedBody);
    });
  });

  test('get players by league working', async () => {
    await request(app).get('/topscorer/league/EPL', (req, res) => {
      const expectedBody = {
        success: true,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            firstname: expect.any(String),
            surname: expect.any(String),
            dob: expect.any(String),
            club: expect.any(String),
            img: expect.any(String),
            season: expect.any(Number),
            league: 'epl',
            appearances: expect.any(Number),
            goals: expect.any(Number),
            gpg: expect.any(Number),
          }),
        ]),
      };
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toMatch(/json/);
      expect(res.body).toMatchObject(expectedBody);
    });
  });
  test('update by id working', async () => {
    await request(app).patch('/topscorer/id/3').send({
      firstname: 'Barry',
    }),
      (req, res) => {
        const expectedBody = {
          success: true,
          payload: expect.arrayContaining([
            expect.objectContaining({
              id: 3,
              firstname: 'Barry',
              surname: expect.any(String),
              dob: expect.any(String),
              nationality: expect.any(String),
              club: expect.any(String),
              img: expect.any(String),
              season: expect.any(Number),
              league: expect.any(String),
              appearances: expect.any(Number),
              goals: expect.any(Number),
              gpg: expect.any(Number),
            }),
          ]),
        };

        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toMatch(/json/);
        expect(res.body).toMatchObject(expectedBody);
      };
  });
  test('update by id working', async () => {
    await request(app).patch('/topscorer/id/4').send({
      league: 'La Liga',
    }),
      (req, res) => {
        const expectedBody = {
          success: true,
          payload: expect.arrayContaining([
            expect.objectContaining({
              id: 4,
              firstname: expect.any(String),
              surname: expect.any(String),
              dob: expect.any(String),
              club: expect.any(String),
              img: expect.any(String),
              season: expect.any(Number),
              league: 'la liga',
              appearances: expect.any(Number),
              goals: expect.any(Number),
              gpg: expect.any(Number),
            }),
          ]),
        };

        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toMatch(/json/);
        expect(res.body).toMatchObject(expectedBody);
      };
  });
   test('update by id working', async () => {
     await request(app).patch('/topscorer/id/10').send({
       club: 'Barca',
     }),
  (req, res) => {
         const expectedBody = {
           success: true,
           payload: expect.arrayContaining([
             expect.objectContaining({
              id: 10,
              firstname: expect.any(String),
               surname: expect.any(String),
               dob: expect.any(String),
              club: 'Barca',
              img: expect.any(String),
              season: expect.any(Number),
              league: expect.any(String),
              appearances: expect.any(Number),
               goals: expect.any(Number),
               gpg: expect.any(Number),
           }),
           ]),
         };

         expect(res.statusCode).toBe(200);
         expect(res.headers['content-type']).toMatch(/json/);
         expect(res.body).toMatchObject(expectedBody);
       };
   });
  test('check delete player by id route is working', async () => {
    const response = await request(app).delete("/topscorer/delete/2")
    const expectedBody = {success: true, payload: expect.objectContaining({ message: `topscorer entry with id: 2 has been deleted`})}
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toStrictEqual(expectedBody);

  })
});
