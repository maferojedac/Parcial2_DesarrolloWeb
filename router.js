const express = require('express');

//objeto que trae lo que controllers exporta
const {getUserData, updateUserAddress} = require('./controller');

const router = express.Router();

router.get('/get-user-data/:id', getUserData);
router.put('/update-user-address/:id', updateUserAddress);

module.exports = {
    router
}