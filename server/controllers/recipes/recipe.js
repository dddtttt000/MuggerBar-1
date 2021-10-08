const { recipe, like } = require('../../models');
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken")

module.exports = {
  // ---------------------------------------------------------------------------------------------------
  // 레시피 게시물 추가
  post: async (req, res) => {
    const token = req.cookies.jwt;

    // 1. 토큰이 없다면 
    if (!token) {
      return res.status(401).json({ data: { recipe: null }, message: "Authorization is required",});
    } else {
      const accessTokenData = jwt.verify(token, process.env.ACCESS_SECRET);
      // 2. 잘못된 토큰 이라면
      if (!accessTokenData) {
        return res.status(401).json({ data: { recipe: null }, message: "invalid access token", });
      }
    }
    // 3. 필수 body 정보가 안들어온 경우
    const { recipe_title, recipe_subtitle, recipe_photo, recipe_content } = req.body;
    if (!recipe_title || !recipe_subtitle || !recipe_photo || !recipe_content) {
      return res.status(400).json({ data: { recipe: null }, message: "bad request", });
    }

    // 4. 정상
    const { user_id } = accessTokenData;
    recipe
      .create({
        user_id: user_id,
        recipe_title: recipe_title,
        recipe_subtitle: recipe_subtitle,
        recipe_photo: recipe_photo,
        recipe_content: recipe_content,
      })
      .then((data) => {
        res.satus(201).json({ data: { recipe: data.dataValues }, message: "Authorization is required", });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // ---------------------------------------------------------------------------------------------------
  get: (req, res) => {
    // 쿼리가 없다면 전체 recipe 레코드 반환
    if ( req.query.user_id === undefined && req.query.recipe_title === undefined ) {
      recipe
        .findAll()
        .then((data) => {
          res.satus(200).json({ data: { recipe: data }, message: "ok", });
        });
    }

    // req.query.user_id 만 있다면 내가 쓴 게시물 목록 반환
    // req.query.recipe_title 만 있다면 제목으로 검색하여 게시물 반환
    if(req.query.user_id || req.query.recipe_title ){
      let searchWord = req.query.recipe_title;
      recipe
        .findAll({
          where: {
            [Op.or] : [      
              { user_id : req.query.user_id },   
              { recipe_title: { [Op.like]: "%" + searchWord + "%" } }
            ]
          }
        })
        .then((data) => {
          if(!data) {
            res.satus(404).json({ data: { recipe: null }, message: "recipe is not found", });
          }
          res.satus(200).json({ data: { recipe: data.dataValues }, message: "ok", });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  // ---------------------------------------------------------------------------------------------------
  delete: async (req, res) => {
    const token = req.cookies.jwt;

    // 1. 토큰이 없다면 
    if (!token) {
      return res.status(401).json({ data: { recipe: null }, message: "Authorization is required",});
    } else {
      const accessTokenData = jwt.verify(token, process.env.ACCESS_SECRET);
      // 2. 잘못된 토큰 이라면
      if (!accessTokenData) {
        return res.status(401).json({ data: { recipe: null }, message: "invalid access token", });
      }
    }

    // 3. params 로 id가 안들어온 경우
    if(!req.params.id){
      return res.status(400).json({ data: { recipe: null }, message: "bad request" });
    }

    // 3. 게시물의 user_id 와 토큰이 아이디가 다르다면 게시물을 삭제할수 없다.
    const { user_id } = accessTokenData; // 로그인한 사용자의 아이디
    const recipe_user_id = await recipe.findOne({ where: { id: req.params.id } }).user_id; // 레피시의 user_id
    if (user_id !== recipe_user_id) {
      return res.status(403).json({ data: { recipe: null }, message: "authentication is required" });
    }

    // 4. 정상 작업
    recipe
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() => {
        return res.status(200).json({ data: { recipe: null }, message: "successfully delete!" });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // ---------------------------------------------------------------------------------------------------
  like: async (req, res) => {
    const token = req.cookies.jwt;

    // 1. 토큰이 없다면 비로그인 사용자로 인식하고
    if (!token) {
      return res.status(401).json({ data: { recipe: null }, message: "Authorization is required" });
    } else {
      const accessTokenData = jwt.verify(token, process.env.ACCESS_SECRET);
      // 2. 잘못된 토큰이라면
      if (!accessTokenData) {
        return res.status(401).json({ data: { recipe: null }, message: "invalid access token" });
      }
    }

    // 3. params 로 id가 안들어온 경우
    if (!req.params.id) {
      return res.status(400).json({ data: { recipe: null }, message: "bad request" });
    }

    const searchRecipe = await recipe.findOne({
      where: {
        id: req.params.id,
      },
    });

    // 4. 전달받은 id의 레피시가 없다면
    if (!searchRecipe) {
      return res.status(404).json({ data: { like: null }, message: "recipe is not found" });
    } else {
      // 5. 정상이라면
      const { user_id } = accessTokenData;
      like
        .create({
          user_id: user_id,
          recipe_id: searchRecipe.id,
        })
        .then((data) => {
          return res.status(200).json({ data: { like: data.dataValues }, message: "ok" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
