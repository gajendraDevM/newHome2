const express = require('express');
const router = express.Router()
const {login, updateAdmin, register, getOneAdmin, isAuthenticate, adminProfile} = require('../controller/admin');
          

router.get('/admin/:id',getOneAdmin)

router.post('/admin', register)

router.post('/adminAuth', login)

router.put('/admin/:id', updateAdmin)

// router.delete('/admin/:id', deleteAdmin)
router.get('/adminProfile',isAuthenticate, adminProfile)



module.exports = router; 