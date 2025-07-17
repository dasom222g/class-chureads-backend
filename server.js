import express from "express";
import dotenv from "dotenv";

// 환경변수 로드
// 전역으로 로드해서 모든 node.js모듈 내에서 접근가능
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server at..", PORT);
});
