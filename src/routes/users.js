const { Router } = require('express');
const router = Router();
const UserService = require('../services/users');

const response = (status, message, data) => {
  return {
    status,
    message,
    data
  }
};

router.get('/', async (req, res) => {
  try {
    const getUser = await UserService.get(req.query);
    res.status(200).send(response(200, 'GET users', getUser));
  } catch (err) {
    res.status(401).send({
      status: 401,
      message: err.message
    })
  }
});

router.post('/', async(req, res) => {
  try {
    const createUser = await UserService.create(req.body);
    res.status(200).send(response(200, 'CREATE user', createUser));
  } catch (err) {
    res.status(401).send({
      status: 401,
      message: err.message
    })
  }
});

router.put('/:id', async(req, res) => {
  try {
    const updateUser = await UserService.update(req.params.id, req.body);
    res.status(200).send(response(200, 'UPDATE user', updateUser));
  } catch (err) {
    res.status(401).send({
      status: 401,
      message: err.message
    })
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const deleteUser = await UserService.delete(req.params.id);
    res.status(200).send(response(200, 'DELETE user', deleteUser));
  } catch (err) {
    res.status(401).send({
      status: 401,
      message: err.message
    })
  }
});

module.exports = router;