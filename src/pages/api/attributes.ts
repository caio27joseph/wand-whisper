import { NextApiRequest, NextApiResponse } from 'next';

const attributes = [
  {
    name: 'Força',
    description: 'Irure minim ad incididunt quis in.',
  },
  {
    name: 'Inteligência',
    description: "Ipsum aliquip ea proident incididunt consectetur ea nisi."
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch attributes
    return res.status(200).json(attributes);
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
