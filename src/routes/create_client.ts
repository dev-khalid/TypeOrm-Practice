import express from 'express';
import { Client } from '../entities/Client';

const router = express.Router();

router.post('/api/client', async (req, res) => {
  const { name,email, cardNumber, balance } = req.body;

  const client = Client.create({
    name,  
    email,
    card_number: cardNumber,
    balance,
  });

  await client.save();

  return res.json(client);
});

export { router as createClientRouter };
