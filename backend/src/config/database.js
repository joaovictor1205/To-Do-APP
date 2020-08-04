const mongoose = require('mongoose');
require('dotenv/config')

const url = process.env.MONGOOSE_URL;
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true});

module.exports = mongoose;
