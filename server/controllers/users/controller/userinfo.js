const { user } = require("../../../models")
const jwt = require("jsonwebtoken")

module.exports = async(req, res) => {
    const token = req.cookies.jwt;
    const verify = jwt.verify(token,process.env.ACCESS_SECRET);
    const userInfo = await user.findOne({
        where : { id : verify.id}
    })
    if(!userInfo){
        res.status(404).json({ data: { userInfo : null }, message: "user is not found" });
    }else{
        res.status(200).json({data : {userInfo : userInfo}, message: "ok" });
    }
}