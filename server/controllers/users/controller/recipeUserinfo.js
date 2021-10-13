const { user } = require("../../../models")

module.exports = async (req, res) => {
  // .get(`https://muggerbar.ml/recipeUserinfo?id=${id}`
  const userId = req.query.id
  
  const payload = await user.findOne({
    where : {
      id : userId
    }
  })

  if (!payload) {
    res.status(404).json({ data: { userInfo: null }, message: "user is not found" });
  } else {
    res.status(200).json({ data: { userInfo: payload.dataValues }, message: "ok" });
  }
}