import db from '../../database';

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ong = await db('ongs').select('name').where('id', id).first();

    if (!ong) {
      return res.status(400).json({ error: 'ONG not found' });
    }

    return res.json(ong);
  }
}

export default new SessionController();
