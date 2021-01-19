const express = require('express');
const router = express.Router()
const {createEmployee, getAllEmployees, deleteManyEmployee, getOneEmployee, updateEmployee, deleteEmployee} = require('../controller/employee');
          


router.post('/employee',  createEmployee)
router.get('/employee', getAllEmployees)

router.get('/employee/:id',getOneEmployee)

router.put('/employee/:id',updateEmployee)
router.delete('/employee/:id',deleteEmployee)
router.post('/employee-many',deleteManyEmployee)

// router.post('/upload',UploadImage)




module.exports = router; 