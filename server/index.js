const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


const userRouter = require('./routes/userRouter')
const searchRouter = require('./routes/searchRouter')
const postRouter = require('./routes/postRouter')

const recommentController = require('./Controller/recommend.js')

//'/user/login' , '/user/logout', '/user/signup', '/user/info'
app.use('/user', userRouter)

//'/search'
app.use('/search', searchRouter)

//'/post/make/content', '/post/get/content', '/post/delete/content'
//'/post/make/comment', '/post/get/comment'
app.use('/post', postRouter)

// '/recommend'
app.use('/recommend', recommentController )






