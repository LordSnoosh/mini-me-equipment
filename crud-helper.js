// Connect to the database
require("dotenv").config();
require("./config/database");

// Require the Mongoose models
const User = require("./models/user");

async function main() {
  const users = await User.find({});
  console.log(users);
}

main();
