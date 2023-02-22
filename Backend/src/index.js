const express = require("express");
const connect  =  require("../src/connection/connection.js")
var cors = require('cors')



const userController = require("../src/crud/user_controller")


const app = express();
app.use(cors({ origin:"*"}))
app.use(express.json());

app.use("/user", userController);


const PORT=process.env.PORT || 4000

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 4000");
});
