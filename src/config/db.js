const db = require('mongoose');

const server = '<your-server-name>';
const database = '<your-database-name>';
const user = '<your-username>';
const password = '<your-password>';
const options = {
  useNewUrlParser: true, 
  useCreateIndex: true
};

db.connect(`mongodb://${user}:${password}@${server}/${database}`, options);
db.connection.on('connected', () => {
  console.log('DB has been connected!')
});
db.connection.on('error', (err) => {
  console.log(`DB hasn't been connected because of ${err}`)
})

module.exports = db;