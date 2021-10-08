const { user } = require("../../../models")
const jwt = require("jsonwebtoken")

module.exports = async(req, res) => {
    const token = req.cookies.jwt; 
    if(!token){
        res.status(400).json({ data: { userInfo : null }, message: "you're currently not logined" })
    }else{
        //있으면 토큰을 해독하여 유저정보존재여부 확인
        const verify = jwt.verify(token,process.env.ACCESS_SECRET);
        await user.findOne({
            where : { id : verify.id }
        })
        res.status(200).json({ data: { userInfo : null }, message: "successfully logout!" })
    }
}