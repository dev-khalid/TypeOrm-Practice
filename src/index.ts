import { createConnection } from 'typeorm';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Test } from './entities/Test';
import { Transaction } from './entities/Transaction';
import express from 'express'; 
const app = express(); 
const main = async () => {
  try {
    await createConnection({
      host: 'localhost',
      type: 'postgres',
      port: 5432,
      username: 'khalid',
      password: 'khalid',
      database: 'khalid',
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log('Connection Successful!');
    app.use(express.json());

    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(connectBankerToClientRouter);
    app.use(createTransactionRouter);
    app.use(deleteClientRouter);
    app.use(fetchClientsRouter);

    app.listen(8080, () => {
      console.log('Now running on port 8080');
    });
  } catch (error) {
    console.log('Something went wrong');
  }
};
main();
