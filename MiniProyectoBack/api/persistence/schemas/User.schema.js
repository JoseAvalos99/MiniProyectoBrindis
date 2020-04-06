const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	Email:{type:String, required:true},
	Password:{type:String, required:true},
	IsAdmin:{type:Boolean, required:true, default: false}
});
module.exports = mongoose.model("Users",UserSchema,"Users");