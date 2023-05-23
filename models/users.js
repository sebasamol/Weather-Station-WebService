var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    login:  { type: String},
    pwd: { type: String}
});

module.exports = mongoose.model('Users', userSchema);