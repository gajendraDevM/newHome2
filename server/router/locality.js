const express = require('express');
const router = express.Router()
const { createLocality, getAllLocalitys } = require('../controller/locality');
          


router.post('/locality',  createLocality)
router.get('/locality', getAllLocalitys)
// router.put('/Locality/:id',updateProperty)
// router.delete('/Locality/:id',deleteProperty)




module.exports = router; 