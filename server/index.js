require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const profileRouter = require("./routes/profileRouter");
const recommendcontroller = require("./controllers/recommend.js");
const searchcontroller = require("./controllers/search.js");

app.use(express.json());
app.use(
  cors({
    origin: ["https://MuggerBar.ml", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);

app.use(cookieParser());

app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/profile', profileRouter)
app.post('/recommend', recommendcontroller)
app.get('/search', searchcontroller);




//로컬
// const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

// let server;
// if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
//   const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
//   const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
//   const credentials = { key: privateKey, cert: certificate };

//   server = https.createServer(credentials, app);
//   server.listen(HTTPS_PORT, () => console.log('https server runnning'));
// } else {
//   server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
// }
// module.exports = server;
