require("dotenv").config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes');
const app = express();
// 파일형식의 데이터를 받기위한 미들웨어---------------------------------
const multer = require("multer");
const storage = multer.diskStorage({
  //파일이 저장될 위치설정
  destination: function (req, file, cb) {
    if (file.fieldname === 'img') {
      cb(null, 'uploads/picture')
    }
    if (file.fieldname === 'video') {
      cb(null, 'uploads/video')
    }
  },
  //저장되는 파일의 이름 설정
  filename: function (req, file, cb) {
    let filename
    console.log(file)
    if (file.fieldname === 'img') {
      filename = +Date.now() + '_' + Math.round(Math.random() * 1E9) + '.png'
    }
    if (file.fieldname === 'video') {
      filename = +Date.now() + '_' + Math.round(Math.random() * 1E9) + '.mp4'
    }
    cb(null, filename)
  },
})
// 확장자 필터링 
const fileFilter = (req, file, cb) => { 
  if (file.mimetype === 'image/png'
    || file.mimetype === 'image/jpg' 
    || file.mimetype === 'image/jpeg'
    ) {
    cb(null, true); // 해당 mimetype만 받겠다는 의미 
  }
  else { // 다른 mimetype은 저장되지 않음 
    cb(null, false);
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })
//--------------------------------------------------------------
//로그를 남겨줌
app.use(morgan('dev'))
//요청의 쿠를 쉽게 추출할수있게 도와줌
app.use(cookieParser());
//json으로 이루어진 요청바디를 받을경우를위해사용
app.use(express.json());
//추가적인 보안을 사용하지않음??
app.use(express.urlencoded({ extended: false }));
//cors요청처리
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://localhost:3000'],//요청을 허용할 오리진
    credentials: true,//사용자 인증이 필요한 리소스접근이 필요한경우 true설정
    methods: ['GET', 'POST', 'DELETE', "PATCH", 'OPTIONS']//허용한 메소드들
  })
);

app.use(upload.single('img'))
app.use('/', indexRouter)
app.get('/', (req, res) => {
  res.send('ohwunwuan')
})

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
let server;
if (fs.existsSync(process.env.KEY_PEM) && fs.existsSync(process.env.CERT_PEM)) {
  const privateKey = fs.readFileSync(process.env.KEY_PEM, 'utf8');
  const certificate = fs.readFileSync(process.env.CERT_PEM, 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log(`https server runnning in ${HTTPS_PORT}`));
} else {
  server = app.listen(HTTPS_PORT, () => console.log('http server running'));
}
module.exports = server;
