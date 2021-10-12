const { user } = require("../../../models")
const jwt = require("jsonwebtoken");
const userinfo = require("./userinfo");
//수정 update
module.exports = async(req, res) => {
    const token = req.cookies.jwt;
    if(!token){//토큰이 없을때 권한필요메시지
        res.status(403).json({ data: { userInfo : null }, message: "authorization is required" })
    }else{
        //해독하여 데이터베이스확인 후
        const verify = jwt.verify(token,process.env.ACCESS_SECRET); //verify 안됐을시 
        if(!verify){
            res.status(401).json({ data: { userInfo : null }, message: "authorization is required" })
        }
        const userInfo = await user.findOne({
            where : { id : verify.id}
        })
        //유저정보 update로 수정. 이때 req.body.user_nickname,req.body.user_password 변경
        if(!userInfo){
            res.status(401).json({ data: { userInfo : null }, message : { data: { userInfo : null }, message: "authorization is required" } }) //추가
        }else{
            //유저정보 있으면
<<<<<<< HEAD
            const update = await user.update({
                user_nickname : req.body.user_nickname,
                user_password : req.body.user_password
            },
                {
                    where : { id : userInfo.dataValues.id}
                } 
            )
            console.log(userInfo)
            delete userInfo.dataValues.user_password;
            res.status(200).json({ data : {userInfo : userInfo.dataValues}, message : "ok"})
=======
            user.update({
              user_nickname : req.body.user_nickname,
              user_password : req.body.user_password
          },
              {
                  where : { id : userInfo.dataValues.id}
              } 
          )

          const newUserInfo = await user.findOne({
            where : { id : verify.id}
          })

          delete newUserInfo.dataValues.user_password;
          res.status(200).json({ data : {userInfo : newUserInfo.dataValues}, message : "ok"})
>>>>>>> 16d5e07bfc64217151df9364d18cc7376c2afcbb
        }
    }
}