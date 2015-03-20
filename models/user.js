/**
 * Created by Fabien on 06/03/2015.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userId : Number,
    name: String,
    password : String,
    firstName: String,
    street: String,
    codePostal : Number,
    town: String,
    email : String,
    phoneNumber : Number
});

Schema.remove(function(err, Schema){

});

//test commit dgdgfdgfdgdf gfgfhgf