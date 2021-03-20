const express = require('express');
const router = express.Router()
const { addSetting, getSetting} = require('../controller/setting');
          


router.post('/setting',  addSetting)
router.get('/setting', getSetting)
// router.put('/setting/:id',updateProperty)
// router.delete('/setting/:id',deleteProperty)




module.exports = router; 