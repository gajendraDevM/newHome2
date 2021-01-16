const Employee = require('../model/employee')
const cloudinary = require('cloudinary').v2;
const datauri = require('datauri');

//***************add Employee**************/
exports.createEmployee = async (req, res)=>{


    try {
    
  

    //    new Employee(req.body).save()
        
        res.status(201).json({msg:"succefully Employee added"})

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
    try {
    
      const Employee =  await Employee.find({});

        res.status(201).json(Employee)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
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



// exports.UploadImage = async (req, res)=>{




//     try {
    
//         // cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});

//         res.status(201).json({msg:"upload succefully"})

//     } catch (error) {
//             res.status(401).json({msg:"somthing went Wrong !"})
    
//     }

// }