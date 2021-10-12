const { comment, user } = require('../../models');
const jwt = require("jsonwebtoken");

module.exports = {
  post: async (req, res) => {
    // 코멘트 작성 => https://muggerbar.ml/comment
    const token = req.cookies.jwt;
    const accessTokenData = jwt.verify(token, process.env.ACCESS_SECRET);

    // 1. 토큰이 없다면 비로그인 사용자로 인식하고
    if (!token) {
      return res.status(401).json({ data: { comment: null }, message: "Authorization is required" });
    } else {
      // 2. 잘못된 토큰이라면
      if (!accessTokenData) {
        return res.status(401).json({ data: { comment: null }, message: "invalid access token" });
      }
    }

    const { recipe_id, comment_content } = req.body;

    // 3. 필수 body 정보가 안들어온 경우
    if (!recipe_id && !comment_content) {
      return res.status(400).json({ data: { comment: null }, message: "bad request" });
    }

    // 4. 정상 처리
    const { id } = accessTokenData;
    await comment
      .create({
        user_id : id,
        recipe_id : recipe_id,
        comment_content : comment_content
      })
      .then((data)=>{
        return res.status(201).json({ data: { comment: data.dataValues }, message: "ok" });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // ---------------------------------------------------------------------------------------------------
  get: async (req, res) => {
    // 특정 게시물의 코멘트를 검색하여 찾는다 => https://muggerbar.ml/comment
    // 1. 필수 바디 정보가 안들어온 경우
    if(!req.query){
      return res.status(400).json({ data: { comment: null }, message: "bad request" });
    }
    
    // 2. 정상 응답
    // 2.1 게시물의 모든 comment 를 찾는다.
    comment.findAll({
      include: [{
        model: user,
        attributes : ["user_nickname"]
      }],
      where: {
        recipe_id: req.query.recipe_id,
      },
    })
    .then((data)=>{
      if(!data){
        return res.status(404).json({ data: { comment: null }, message: "comment is not found" });
      }else {
        data.map((comment)=>{return comment.dataValues})
        
        return res.status(200).json({ data: { comment: data }, message: "ok" })
      }
    })
  },
};