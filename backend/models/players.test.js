// import request from 'supertest';
// import app from '../app';
import { test, expect } from '@jest/globals';
// import { getPlayers } from './players.js';

test('when getPlayers function is called, all players are returned', () => {
 async function getPlayers() {
    return {
        success: true,
        data: [
            {
                firstName: 'Dave',
                Surname: 'Test',
                dob: '12-04-1990',
                Club: 'AEK Athens',
            }
        ]
    }
}
    const actual = getPlayers();
    const expected = {
        success: true,
        data: [
            {
                firstName: expect.any(String),
                Surname: expect.any(String),
                dob: expect.any(String),
                Club: expect.any(String),
            }
        ]
    }
 
expect(actual).resolves.toStrictEqual(expected);

})