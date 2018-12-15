var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/todo');
var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    psw: {
        type: String
    }
    // age: Number,
    // address: String,
    // createAt: {
    //     type: Date,
    //     default : Date.now()
    // }
});
userSchema.methods.adduser = function(user, callback) {
	this.username = user.username;
	this.psw = user.psw;
	this.save(callback);
}

// 将数据模型暴露出去
var User = mongoose.model('users', userSchema);

module.exports = User;