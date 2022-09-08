import request from 'supertest';
import app from '../app';
import { test, expect } from '@jest/globals';

describe('route tests', () => {
    test('app working', () => {
        app.get('/topscorer', (req, res) => {
            res.status(200)
        })
    })



})