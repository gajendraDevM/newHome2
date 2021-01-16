const express = require('express');
const router = express.Router()
const {createClient, getAllClients, getOneClient, updateClient, deleteClient} = require('../controller/client');
          


router.post('/client',  createClient)
router.get('/client', getAllClients)

router.get('/client/:id',getOneClient)

router.put('/client/:id',updateClient)
router.delete('/client/:id',deleteClient)




module.exports = router; 