/**
 * Created by Fabien on 06/03/2015.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var catalogue = new Schema({
    id: Number,
    name: String,
    ingredient: String,//collection
    prix: Number,
    onSale: Boolean
});

