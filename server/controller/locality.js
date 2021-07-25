const Locality = require('../model/locality')

//***************add Locality**************/
exports.createLocality = async (req, res)=>{


    try {
    
  

      const locality =   new Locality(req.body);

      await locality.save()
        
        res.status(201).json({msg:"succefully Locality added"})

    } catch (error) {

        if(error.code === 11000) {

                     return res.status(401).json({msg:" already exist!", error})

        }

            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}



exports.updateLocality = async (req, res)=>{
    try {

        console.log(req.body);
    
       await Locality.updateOne({_id:req.params.id}, req.body);

        res.status(201).json({msg:"succefully Locality updated"})

    } catch (error) {
        console.log(error);
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.getAllLocalitys = async (req, res)=>{


    try {

      const locality =  await Locality.find({});

        res.status(201).json(locality)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}


exports.getOneLocality = async (req, res)=>{
    try {
    
      const Locality =  await Locality.findOne({_id:req.params.id});

        res.status(201).json(Locality)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.deleteLocality = async (req, res)=>{
    try {
    
       await Locality.deleteOne({_id:req.params.id});

        res.status(201).json({msg:"deleted succefully"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}

exports.deleteManyLocality = async (req, res)=>{

    try {
     await Locality.deleteMany({
        _id: {
          $in: req.body
        }
      },);

        res.status(201).json({msg:"deleted succefully"})

    } catch (error) {

      res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}
