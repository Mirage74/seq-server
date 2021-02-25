const mongoose = require('mongoose');
const uri = "mongodb+srv://hmAdm:5LhuI8zEKI6g1k4B@cluster0.kle2f.mongodb.net/heroeswm?retryWrites=true&w=majority";
const beautifyUnique = require('mongoose-beautiful-unique-validation');

mongoose.plugin(beautifyUnique);
mongoose.set('debug', true);

mongoose.plugin(schema => {
  if (!schema.options.toObject) {
    schema.options.toObject = {};
  }

  if (schema.options.toObject.transform == undefined) {
    schema.options.toObject.transform = (doc, ret) => { delete ret.__v; return ret; };
    schema.options.toObject.transform = (doc, ret) => { delete ret.createdAt; return ret; };
    schema.options.toObject.transform = (doc, ret) => { delete ret.updatedAt; return ret; };


  }

});

mongoose.set('useCreateIndex', true)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })


module.exports = mongoose;
