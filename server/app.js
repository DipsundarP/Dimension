require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");

const port = 9000;

app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "https://next-step-mu-five.vercel.app",
//     methods: "POST , GET",
//     allowedHeaders: "Content-Type,Authorization", // Allow specific headers
//   })
// );
app.use(router);
  
app.listen(port, () => {
  console.log(`server start at port no :${port}`);
});
