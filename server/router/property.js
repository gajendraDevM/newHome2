const express = require('express');
const router = express.Router()
const {createProperty, 
    getAllPropertys, getOneProperty, 
    updateProperty, deleteProperty, getProprtybyFilter,
    getFilterWithBetween,
     deleteManyProperty} = require('../controller/property');
          


router.post('/property',  createProperty)
router.get('/property', getAllPropertys)
router.get('/property/filter', getProprtybyFilter)
router.get('/property/filter-between', getFilterWithBetween)

router.get('/property/:id',getOneProperty)

router.put('/property/:id',updateProperty)
router.delete('/property/:id',deleteProperty)
router.post('/property-many', deleteManyProperty)




module.exports = router; 