import genereteUniqueId from '../../utils/generateUniqueId';
import db from '../../database';

class OngController {
  async index(req, res) {
    const ongs = await db('ongs').select('*');

    return res.json(ongs);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = genereteUniqueId();

    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.status(200).json({ id });
  }
}

export default new OngController();
