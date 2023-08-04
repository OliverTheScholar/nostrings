const User = require('../models/userModel');

const userController = {};

userController.addUser = async (req, res, next) => {
    const newUser = req.body;
    try {
        const newUser = await User.create({privateKey: req.body.sk, publicKey: req.body.pk, nickname: req.body.nickname})
        console.log(newUser);
        return next()
    }
    catch {
        next({err: 'error creating user wahh'})
    }
}

userController.findUser = async (req, res, next) => {
    const user = req.body;
    try {
        const foundUser = await User.findOne({nickname: req.body.nickname})
        console.log(foundUser);
        res.locals.result = foundUser;
        return next()
    }
    catch {
        next({err: 'error finding user'})
    }
}
userController.findUserByPubKey = async (req, res, next) => {
    const user = req.body;
    try {
        const foundUser = await User.findOne({publicKey: req.body.pubkey})
        console.log(foundUser);
        res.locals.result = foundUser;
        return next()
    }
    catch {
        next({err: 'error finding user'})
    }
}

module.exports = userController;