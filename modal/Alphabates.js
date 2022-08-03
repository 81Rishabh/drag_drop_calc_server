const mongoose = require('mongoose');
const AlphabatSchema = new mongoose.Schema({
    name : {
       char : {
         type : String
       },
       value : {
         type : Number
       }
    }
});

const Alpha = mongoose.model('Alpha', AlphabatSchema);
module.exports = Alpha;