const { user } = require("../../models")
const jwt = require("jsonwebtoken")

module.exports = {
    login: async(req, res) =>{
        const userInfo = await user.findOnd({
            where : { Email : req.body.Email, Password : req.body.Password}
        })
        if(!userInfo){
            res.status(404).json({ data: { userInfo : null },message: "없는 사용자 입니다" })
        }else{
            const accessToken = jwt.sign(
                {
                    id: userInfo.dataValues.id,
                    User_Email: userInfo.dataValues.Email,
                    User_Nickname: userInfo.dataValues.Nickname,
                    createdAt: userInfo.dataValues.createdAt,
                    updatedAt: userInfo.dataValues.updatedAt
                },
                process.env.ACCESS_SECRET,{ expiresIn:'1h' }
            );
            res.cookie('accessToken',accessToken,{
                sameSite:'none',secure:true,httpOnly:true
            });
            res.status(200).json({ data: { accessToken: accessToken }, message: "ok" })
        }
    },


    logout: (req, res) =>{
        res.status(200).json({data:{userInfo:null}, message: "successfully signd out"})
    },


    signup: async(req, res) =>{
        const userInfo = await user.findOnd({
            where: { Email : req.body.Email, Password : req.body.Password, Nickname : req.body.Nickname}
        })
        if(userInfo === null){
            const create = await user.create({
                User_email : req.body.Email,
                User_Nickname : req.body.Nickname,
                User_Password : req.body.Password
            });
            delete create.dataValues.Password
            const accessToken = jwt.sign(create,process.env.ACCESS_SECRET);
            res.cookie('accessToken',accessToken,{
                sameSite:'none',secure:true,httpOnly:true
            });
            res.status(201).json({ data: { accessToken:accessToken, userInfo:userInfo },message: "ok"})
        }else{
            res.status(409).json({ data: {userInfo : null}, message: "이미 존재하는 이메일입니다"})
        }
    },

    info: async(req, res) =>{ //ㅕ
        const Token = req.cookies.accessToken;
        const verify = jwt.verify(Token,process.env.accessToken)

        const userInfo = user.findOnd({
            where : {Email:verify.Email}
        })
        if(!userInfo){
            res.status(404).json({data: {userInfo : null}, message: "해당 유저는 존재하지 않습니다."})
        }else{
            delete userInfo.dataValues.Password
            res.status(200).json({data: {userInfo : userInfo},message: "ok"})
        }
    }
}