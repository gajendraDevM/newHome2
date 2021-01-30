const express = require('express');
const router = express.Router()
const {settingProperty, getsettingProperty} = require('../controller/propertySetting');

router.post('/setting-property',  settingProperty)
router.get('/setting-property',  getsettingProperty)


module.exports = router; 
