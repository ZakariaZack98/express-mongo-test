require("dotenv").configDotenv();
const { app } = require("./src/app");
const { connectDatabase } = require("./src/database/db");

connectDatabase()
.then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log("service is running on port 4000");
  });
})
.catch(err => {
  console.error('Error from index.js', err)
})
