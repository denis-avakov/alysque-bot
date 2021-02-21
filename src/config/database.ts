import admin from 'firebase-admin';
import vars from './vars';

const database = admin.initializeApp({
  // eslint-disable-next-line
  credential: admin.credential.cert(require('../../service-account.json')),
  databaseURL: vars.databaseURL
});

export default database.database();
