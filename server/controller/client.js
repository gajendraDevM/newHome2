const Client = require('../model/clientSchema')

//***************add client**************/
exports.createClient = async (req, res)=>{
    try {
    


       new Client(req.body).save()
        
        res.status(201).json({msg:"succefully client added"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}



exports.updateClient = async (req, res)=>{
    try {

        console.log(req.body);
    
       await Client.updateOne({_id:req.params.id}, req.body);

        res.status(201).json({msg:"succefully client updated"})

    } catch (error) {
        console.log(error);
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.getAllClients = async (req, res)=>{


    let search = req.query.search


    try {
    
if(req.query.search) {

 
 const client =  await Client.find({$or: [{client_name:{$regex:search,$options:'i'}},
 {email:{$regex:search,$options:'i'}}, {phone_number:{$regex:search,$options:'i'}}  ]})

    return res.status(201).json(client)

}


      const client =  await Client.find({});

        res.status(201).json(client)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}


exports.getOneClient = async (req, res)=>{
    try {
    
      const client =  await Client.findOne({_id:req.params.id});

        res.status(201).json(client)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.deleteClient = async (req, res)=>{
    try {
    
       await Client.deleteOne({_id:req.params.id});

        res.status(201).json({msg:"deleted succefully"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}