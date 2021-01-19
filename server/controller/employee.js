const Employee = require('../model/employee')
const cloudinary = require('cloudinary').v2;
const datauri = require('datauri');

//***************add Employee**************/
exports.createEmployee = async (req, res)=>{


    try {
    
  console.log(req.body);

      const employee =   new Employee(req.body);

      await employee.save()
        
        res.status(201).json({msg:"succefully Employee added", employee})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}



exports.updateEmployee = async (req, res)=>{
    try {

        console.log(req.body);
    
       await Employee.updateOne({_id:req.params.id}, req.body);

        res.status(201).json({msg:"succefully Employee updated"})

    } catch (error) {
        console.log(error);
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.getAllEmployees = async (req, res)=>{

    let search = req.query.search

    try {

        if(req.query.search) {

 
            const employee =  await Employee.find({$or: [{client_name:{$regex:search,$options:'i'}},
            {email:{$regex:search,$options:'i'}}, {phone_number:{$regex:search,$options:'i'}}  ]})
           
               return res.status(201).json(employee)
           
           }


    
      const employee =  await Employee.find({});

        res.status(201).json(employee)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}


exports.getOneEmployee = async (req, res)=>{
    try {
    
      const Employee =  await Employee.findOne({_id:req.params.id});

        res.status(201).json(Employee)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.deleteEmployee = async (req, res)=>{
    try {
    
       await Employee.deleteOne({_id:req.params.id});

        res.status(201).json({msg:"deleted succefully"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}

exports.deleteManyEmployee = async (req, res)=>{

    try {
     await Employee.deleteMany({
        _id: {
          $in: req.body
        }
      },);

        res.status(201).json({msg:"deleted succefully"})

    } catch (error) {

      res.status(401).json({msg:"somthing went Wrong !", error})
    
    }

}
