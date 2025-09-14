// Vous devez insérer les nouveaux tests ici
import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';
import { assert } from 'console';
import exp from 'constants';

const request = supertest(app);

const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';

beforeAll(async () => {
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom2 });

});

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  it("devrait redémarrer le jeu", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });


  it("devrait avoir zero joueur", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.body.joueurs).toHaveLength(0);
    // expect(response.type).toBe("application/json");
  });

});