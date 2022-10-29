const express = require('express');

//objeto que trae lo que controllers exporta
const {getUserData, updateUserAddress, createUser, deleteUser} = require('./controller');

const router = express.Router();

router.get('/get-user-data/:id', getUserData);
router.put('/update-user-address/:id', updateUserAddress);
router.get('/create-user', createUser);
router.delete('delete-user/:id', deleteUser);

module.exports = {
    router
}