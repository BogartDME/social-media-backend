const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost:27017/thoughts_DB', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
});

module.exports = mongoose.connection;