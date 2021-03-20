const Setting = require('../model/setting')


exports.addSetting = async (req, res)=>{
    try {
    
console.log(req.body);

   const setting =    new Setting(req.body)
    await    setting.save()


        res.status(201).json({msg:"succefully Property added"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}


exports.getSetting = async (req, res)=>{
    try {

    const settings = await Setting.find({});    
res.status(201).json({msg:"get success", settings})

    } catch (error) {
  res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}