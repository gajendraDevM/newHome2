const Property = require('../model/property')

//***************add Property**************/
exports.createProperty = async (req, res)=>{
    try {
    


       new Property(req.body).save()
        
        res.status(201).json({msg:"succefully Property added"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}



exports.updateProperty = async (req, res)=>{
    try {

        console.log(req.body);
    
       await Property.updateOne({_id:req.params.id}, req.body);

        res.status(201).json({msg:"succefully Property updated"})

    } catch (error) {
        console.log(error);
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.getAllPropertys = async (req, res)=>{


    let search = req.query.search
    let filterword = req.query.filterword.toLowerCase().trim()



    try {
    
if(req.query.search) {



 const property =  await Property.find({$or: [{property_name:{$regex:search,$options:'i'}},
 {'owner_info.email':{$regex:search,$options:'i'}},

  {'owner_info.phone_number':{$regex:search,$options:'i'}}  ]})

    return res.status(201).json(property)

}

if(filterword !== "null" ){
   

const property =  await Property.find({'owner_info.contact_by':filterword});

      return  res.status(201).json(property)
    
}


      const property =  await Property.find({});

        res.status(201).json(property)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}





exports.getProprtybyFilter = async (req, res)=>{


    let search = req.query.search
    let filterword = req.query.filterword.toLowerCase().trim()



    try {
       let condition = `property_info.${filterword}`
 
if(req.query.search) {


    if(filterword === 'ownership_type' 
     || filterword === 'transection_type'
     || filterword === 'furnished_status' 
     || filterword === 'sale_type' 
     || filterword === 'construction_status'
     || filterword === 'property_catagory' ) {


 const property =  await Property.find({[condition]: search})
return res.status(201).json(property)

     }



 const property =  await Property.find({ $and: [ {[condition]: { $lt: search }}, {[condition]: { $gt: (10 - search) }}  ]})

    return res.status(201).json(property)

}


      const property =  await Property.find({});

        res.status(201).json(property)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}




exports.getFilterWithBetween = async (req, res)=>{


    let filterword = req.query.filter.toLowerCase().trim()
    let min =parseInt(req.query.min) 
    let max =parseInt(req.query.max) 



    try {
       let condition = `property_info.${filterword}`
 
if(filterword === 'total_price') {

    const property =  await Property.find({ $and: [ {'Price_info.total_price': { $lte: max }}, {'Price_info.total_price': { $gte: min }}  ]})

    return res.status(201).json(property)


}


if(filterword !== 'total_price') {

    const property =  await Property.find({ [condition]: { $lte: min }})

    return res.status(201).json(property)


}

      const property =  await Property.find({});

        res.status(201).json(property)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}






exports.getOneProperty = async (req, res)=>{
    try {
    
      const property =  await Property.findOne({_id:req.params.id});

        res.status(201).json(property)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.deleteProperty = async (req, res)=>{
    try {
    
       await Property.deleteOne({_id:req.params.id});

        res.status(201).json({msg:"deleted succefully"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}

exports.deleteManyProperty = async (req, res)=>{
    try {
   await Property.deleteMany({
        _id: {
          $in: req.body
        }
      },);

        res.status(201).json({msg:"deleted succefully"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}