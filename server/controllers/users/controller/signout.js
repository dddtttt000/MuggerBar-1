const { user } = require("../../../models")
const jwt = require("jsonwebtoken")

module.exports = async(req, res) => {
    const token = req.cookies.jwt; 
    if(!token){//토큰없으면 실패 실패메세지 api문서상 수정필요할듯
       res.status(400).json({ data: { userInfo : null }, message: "Failed to cancel membership" })
    }else{
        const verify = jwt.verify(token,process.env.ACCESS_SECRET);
        //쿠키가 있으면 해당하는 아이디를 삭제
        await user.destroy({
            where : { id : verify.id }
        })
        res.status(200).json({ data: { userInfo : null }, message: "successfully signout!" })
    }   
}