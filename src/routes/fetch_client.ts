import express from 'express';
import { Banker } from '../entities/Banker';
import { createQueryBuilder } from 'typeorm';
import { Client } from '../entities/Client';
import { create } from 'ts-node';
import { createAbstractBuilder, createTypeQueryNode } from 'typescript';

const router = express.Router();

router.get('/api/bankers', async (req, res) => {
  const client = await createQueryBuilder('client')
    .select('client.name')
    .from(Client, 'client')
    .leftJoinAndSelect('client.transactions', 'transaction')
    .where('client.id=:clientId', { clientId: 3 })
    .getOne();
  return res.json(client);
});
export { router as fetchClientRouter };
