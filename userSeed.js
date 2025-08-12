const sequelize = require("../config/db");
const User = require("../models/userModel");

const seedUsers = async () => {
  //This function will perform asynchronous operations like syncing the database and inserting data.
  await sequelize.sync({ force: true }); //Synchronizes all models with the database. The { force: true } option drops all existing tables and recreates them from scratch.

  await User.bulkCreate([
    //Uses bulkCreate() to insert multiple user records into the Users table in one go. This is faster and cleaner than calling User.create() multiple times.
    {
      name: "Alisha",
      email: "alisha@example.com",
      password: "secure123",
      role: "admin",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      role: "user",
    },
  ]);

  console.log("Users seeded");
};

seedUsers();
