const mongoose = require('mongoose')
const beautifyUnique = require('mongoose-beautiful-unique-validation')
mongoose.plugin(beautifyUnique)

const seqSchema = new mongoose.Schema({
  a1_index: Number, 
  a1_value: Number, 
  a2_index: Number, 
  a2_value: Number, 
  n_index : Number 
}, {
  timestamps: false
})


seqSchema.statics.publicFields = ['a1_index', 'a1_value', 'a2_index', 'a2_value', 'n_index']
const seqModel = mongoose.model('Seq', seqSchema)
module.exports = seqModel
