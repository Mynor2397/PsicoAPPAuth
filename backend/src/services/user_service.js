const userStorage = require('../storage/user.storage')
const userService = {}

userService.getCredentials = async (id, email) => {
    return await userStorage.getCredentials(id, email)
}

userService.createUser = async (id, name, email) => {
    let member = { idrol: 'f773d0e2-6f64-4957-8ad4-179455994849', name: "member" }

    return await userStorage.createUser(id, member, name, email)
}

module.exports = userService;
