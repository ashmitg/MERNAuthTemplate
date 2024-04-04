const mongoose = require('mongoose');
const User = require('../Models/UserModel');
const db = async (url, database) => {

  try {
    const DB_OPTIONS = {
        dbName: database
    }
    mongoose.set("strictQuery", false);
    await mongoose.connect(url, DB_OPTIONS);
    let adminExisting = await User.findOne({ role: 'admin' });
    console.log(adminExisting, "adminExisting")
    if (adminExisting==null) {
        await User.create({
            email: 'admin@gmail.com',
            name: 'admin',
            password: 'admin$123',
            role: 'admin',
        });
        console.log("Admin created successfully");
    } else {
        console.log("Admin already exists");
    }
    console.log(`Connected to database: ${database}`);
  } catch (error) {
    console.error(`Error connecting to database: ${error}`);
  }
}

module.exports = db