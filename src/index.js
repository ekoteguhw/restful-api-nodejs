const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

const userRouter = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userRouter);

app.listen(port, () => {
  console.info(`Server has started on http://localhost:${port}`);
});