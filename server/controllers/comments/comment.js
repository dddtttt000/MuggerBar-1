const { comment,user } = require("../../models");
const jwt = require("jsonwebtoken");


module.exports = {
   post : async(req, res) => {
      // const token = req.cookies.jwt
      // if(!token){ // 토큰이없어서 권한없음
      //    res.status(401).json({ data: { comment : null }, message: "authorization is required" })
      // }else{ 
      //    const verify = jwt.verify(token,process.env.ACCESS_SECRET);
      //    const userInfo = await user.findOne({
      //       where : { id : verify.id }
      //    }) 
      //    if(!userInfo){ //유저가없으면 실패
      //       res.status(400).json({ data: { comment : null }, message: "fail to post comment" })
      //    }else{//코멘트생성
      //       const commentInfo = await comment.create({
      //          where : { recipe_id : req.body.recipe_id, comment_content : req.body.comment_content}
      //       })
      //       //comment에 recipeid, content, userid 세가지가필요한데....음
      //       res.status(200).json({ data : { comment : commentInfo}, message : "ok"})
      //    }
      // }
   },
   get : (req, res) => {
      
   }
}