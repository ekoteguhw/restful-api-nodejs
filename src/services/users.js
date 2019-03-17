const UserModel = require('../models/users');

class UserService {
  async get(params) {
    let options = {};

    if (params.email) {
      options.email = params.email;
    }

    const getUser = await UserModel.find(options);
    return getUser;
  }

  async create(params) {
    if (Object.keys(params).length === 0 ) {
      throw new Error('Parameter is empty');
    }
    const createUser = await UserModel.create(params);
    return createUser;
  }

  async update(id, params) {
    if (Object.keys(params).length === 0 ) {
      throw new Error('Parameter is empty');
    }
    const updateUser = await UserModel.findOneAndUpdate(id, params, { new: true});
    return updateUser;
  }

  async delete(id) {
    const deleteUser = await UserModel.findOneAndRemove(id);
    return deleteUser;
  }
}

module.exports = new UserService;