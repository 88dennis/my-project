const mongoose = require('mongoose');
const connection = "mongodb+srv://88dennis:88dennis@cluster0-4repr.mongodb.net/myproject?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));