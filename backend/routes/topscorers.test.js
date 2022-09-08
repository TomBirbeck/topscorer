import request from 'supertest';
import app from '../app';
import { test, expect } from '@jest/globals';

describe('route tests', () => {
  test('app working', async () => {
    await request(app).get('/topscorer/1993', (req, res) => {
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
    await request(app).get('/topscorer/1992/Ligue 1', (req, res) => {
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
});
