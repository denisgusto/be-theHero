import request from 'supertest';
import app from '../../src/app';
import db from '../../src/database';

describe('ONG', () => {
  beforeEach(async () => {
    await db.migrate.latest();
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });

  it('shoud be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'OU',
      email: 'contato@npds.com.br',
      whatsapp: '2499445566',
      city: 'Petrópolis',
      uf: 'RJ',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
