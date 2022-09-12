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
            firstName: expect.any(String),
            surName: expect.any(String),
            dob: expect.any(String),
            club: expect.any(String),
            imgURL: expect.any(String),
            season: 1993,
            league: expect.any(String),
            appearances: expect.any(Number),
            goals: expect.any(Number),
            GPG: expect.any(Number),
          }),
        ]),
      };
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toMatchObject(expectedBody);
    });
  });

  test('get top scorer by year and league working', async () => {
    await request(app).get('/topscorer/year/1992/Ligue 1', (req, res) => {
      const expectedBody = {
        success: true,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            firstName: expect.any(String),
            surName: expect.any(String),
            dob: expect.any(String),
            club: expect.any(String),
            imgURL: expect.any(String),
            season: 1992,
            league: 'Ligue 1',
            appearances: expect.any(Number),
            goals: expect.any(Number),
            GPG: expect.any(Number),
          }),
        ]),
      };
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toMatchObject(expectedBody);
    });
  });

  test('get player by surname working', async () => {
    await request(app).get('/topscorer/surname/simons', (req, res) => {
      const expectedBody = {
        success: true,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            firstName: expect.any(String),
            surName: 'simons',
            dob: expect.any(String),
            club: expect.any(String),
            imgURL: expect.any(String),
            season: expect.any(Number),
            league: expect.any(String),
            appearances: expect.any(Number),
            goals: expect.any(Number),
            GPG: expect.any(Number),
          }),
        ]),
      };
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toMatchObject(expectedBody);
    });
  });

  test('get players by league working', async () => {
    await request(app).get('/topscorer/league/epl', (req, res) => {
      const expectedBody = {
        success: true,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            firstName: expect.any(String),
            surName: expect.any(String),
            dob: expect.any(String),
            club: expect.any(String),
            imgURL: expect.any(String),
            season: expect.any(Number),
            league: 'epl',
            appearances: expect.any(Number),
            goals: expect.any(Number),
            GPG: expect.any(Number),
          }),
        ]),
      };
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toMatchObject(expectedBody);
    });
  });
  test.only('update by id working', async () => {
    await request(app).patch('/topscorer/2', (req, res) => {
      const expectedBody = {
        success: true,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: 2,
            firstName: expect.any(String),
            surName: expect.any(String),
            dob: expect.any(String),
            club: expect.any(String),
            imgURL: expect.any(String),
            season: expect.any(Number),
            league: expect.any(String),
            appearances: expect.any(Number),
            goals: expect.any(Number),
            GPG: expect.any(Number),
          }),
        ]),
      };
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toMatchObject(expectedBody);
    });
  });
});
