const mongoose = require('mongoose');
const AlphabatSchema = new mongoose.Schema({
   A : { type : Number },
   B : { type : Number },
   C : { type : Number },
   D : { type : Number },
   E : { type : Number },
   F : { type : Number },
});

const Alpha = mongoose.model('Alpha', AlphabatSchema);
module.exports = Alpha;