const PropertySetting = require('../model/propertySetting')


exports.settingProperty = async (req, res)=>{
    try {
    
console.log(req.body);

       new PropertySetting(req.body).save()
        
        res.status(201).json({msg:"succefully Property added"})

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}
exports.getsettingProperty = async (req, res)=>{
    try {
    
const settings = await PropertySetting.find({})

 console.log(settings);

        res.status(201).json(settings)

    } catch (error) {
            res.status(401).json({msg:"somthing went Wrong !"})
    
    }

}