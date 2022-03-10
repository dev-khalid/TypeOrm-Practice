import { Router } from 'express';
import { Client } from '../entities/Client';
import { Banker } from 'src/entities/Banker';

const router = Router();
router.put('/api/banker/:bankerId/client/:clientId', async (req, res) => {
  const { bankerId, clientId } = req.params;
  const client = await Client.findOne(parseInt(clientId));
  const banker = await Banker.findOne(parseInt(bankerId));
  if (banker && client) {
    banker.clients = [client];
    await banker.save();
    return res.json({
      msg: 'banker connected to client',
    });
  } else {
    res.json({
      msg: 'banker or client not found',
    });
  }

  //this is the great usecase where i can use transaction also .
});
