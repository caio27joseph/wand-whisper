import dbConnect from '@/lib/mongoose';
import Attribute from '@/models/Attribute';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name, description } = req.body;

      const attribute = await Attribute.create({ name, description });
      res.status(201).json(attribute);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create attribute' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
