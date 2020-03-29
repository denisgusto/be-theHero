import db from '../../database';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await db('incidents').select('*').where('ong_id', ong_id);

    return res.json(incidents);
  }
}

export default new ProfileController();
