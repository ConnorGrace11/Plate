const User = require('../models/users')

exports.grantAccess = async (req, res, next) => {
    try {
        //const accessible = []
        const userId = await User.find()
        const stringed = JSON.parse(userId)
        var ids = stringed._id
        res.send(ids)
        next()
        
    } catch (error) {
        res.status(500).json({ message: error.message })
        next()
    }    
    //     for(var i = 0; i < userId.length; i++) 
    //     {
    //         accessible.push(userId);
    //     }
    //     res.send(accessible)
        
    // } catch (error) {
    //     res.status(500).json({ message: error.message })
    //     next()
    // }    

    // function jsonParser(stringValue) {

    //     var string = JSON.stringify(stringValue);
    //     var objectValue = JSON.parse(string);
    //     return objectValue['mm'];
    //  }
}