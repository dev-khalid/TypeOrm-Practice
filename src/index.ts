import { createConnection } from 'typeorm';

const main = async () => {
  try {
    await createConnection({
      host: 'localhost',
      type: 'postgres',
      port: 5432,
      username: 'khalid',
      password: 'khalid',
      database: 'khalid',
    });
    console.log('Connection Successful!');
  } catch (error) {
    console.log('Something went wrong');
  }
};
main();
 