const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin=require('../model/admin')



const maxAge = 3 * 24 * 60 * 60

const createToken = (id) =>{

return jwt.sign({id},  'JWT_SCREATE', {
    expiresIn:maxAge
})

}

//******** register ***** */
exports.register = async (req,res) =>{

    const {admin_name, email, password, confirm_password,} = req.body


    try {
   
        if(password !== confirm_password ){

            return res.status(401).json("password is not matched")
     
     }
  
    const admin = new Admin({

        admin_name,
        email,
        password,
        
    })

    const salt = await bcrypt.genSalt(10)
    admin.password = await bcrypt.hash(password,salt) 
    

    await admin.save();

    const token =  createToken(admin._id);


    res.status(201).json({msg:"Registered Succefully", admin, token})
            
        } catch (error) {

            res.status(401).json({err:"Somthing Went Wrong !",error})
            
        }

    }


//************update admin************* */
exports.updateAdmin = async (req,res)=>{
    const {password, admin_name} = req.body;
        try{

            const admin = await Admin.findById({_id:req.params.id})
            const salt = await bcrypt.genSalt(10)
            
            admin.password = await bcrypt.hash(password,salt) 
            admin.admin_name = req.body.admin_name;

            await admin.save();

            res.status(201).json({msg:"update Succefully", admin})

        } catch (error){
         
            res.status(401).json({err:"Somthing Went Wrong !",error})

        }

    }

// //*************delete admin*********** */
// exports.deleteAdmin = async (req,res)=>{

//         try {
            
//             const admin = await Admin.deleteOne({_id:req.params.id})
//             res.status(201).json({msg:"deleted Succefully",admin})
        
//         } catch (error) {
        
//                     res.status(401).json({err:"Somthing Went Wrong !",error})
        
//         }
// }



//***************get one admin**************/
exports.getOneAdmin = async (req, res)=>{
    try {
    
        const admin = await Admin.findOne({_id:req.params.id})
       
        res.status(201).json(admin)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }
    }



//************admin login*********** */
exports.login = async (req, res) => {
    const { email, password} = req.body

    console.log(req.body);
    
     try{  
           const admin = await Admin.findOne({email : email})
        // const admin = await Admin.findOne({admin_name : admin_name})
            if(!admin) {
                    return res.status(400).json({msg:'invalid admin name'})
                  }

        

          
        //    const isMatch = await  bcrypt.compare(password.toString(), admin.password)


        //    if(!isMatch) {
    
        //     return  res.status(400).json({msg:'invalid password'})
        // }
    
      
      const token = createToken(admin._id);
      res.status(201).json({msg:"Succefully login", token})
    
     }catch(error){
        res.status(401).json({err:"Somthing Went Wrong !",error})
     }
    }
    
    
    //***************admin profile*********** */
    exports.adminProfile = async (req, res)=>{
    
        try {
    
           const admin = await Admin.findById(req.admin._id).select('-password')
    
           if(!admin) {
    
            return res.status(401).json({json:"no Authorization"})
           }
    
        res.status(201).json(admin) 
    
        } catch (error) {
                res.status(401).json({msg:"Somthing went wrong"}) 
    
        }

    }
    
    
    //************ Authenticate ************ */
    exports.isAuthenticate = async (req, res, next) =>{
    
        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        
        ){ 
            try {          
               let token = req.headers.authorization.split(' ')[1]
               
                const decoded = jwt.verify(token, process.env.jwtSecret)
            
                req.admin = await Admin.findById(decoded.id).select('-password');
                next()
        
            } catch (error) {
        
                res.status(401).json({error:error.message}) 
            }
        }   
    }
       