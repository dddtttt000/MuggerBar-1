const { comment, user } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const token = req.cookies.jwt;

    // 1. 토큰이 없다면 비로그인 사용자로 인식하고
    if (!token) {
      return res.status(401).json({ data: { comment: null }, message: "Authorization is required" });
    } else {
      const accessTokenData = jwt.verify(token, process.env.ACCESS_SECRET);
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
    const { user_id } = accessTokenData;
    await comment
      .create({
        user_id : user_id,
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
    // 1. 필수 바디 정보가 안들어온 경우
    if(!req.query){
      return res.status(400).json({ data: { comment: null }, message: "bad request" });
    }

    // 2. 정상 응답
    // 2.1 게시물의 모든 comment 를 찾는다.
    const payload = await comment.findAll({
      where: {
        recipe_id: req.query.recipe_id,
      },
    });
    // 2.2 찾은 결과가 없을 경우
    if(!payload) {
      return res.status(404).json({ data: { comment: null }, message: "comment is not found" });
    }else {
      // 2.3 Comment 작성자의 닉네임을 찾는다.
      await user.findOne({
        where : {
          id : payload.user_id
        }
      })
      .then((data)=>{
        // 2.4 Comment 정보마다 작성자의 닉네임을 추가하여 전송해준다.
        payload.dataValues.user_nickname = data.dataValues.user_nickname
        return res.status(200).json({ data: { comment: payload.dataValues }, message: "ok" })
      })
    }
  },
};