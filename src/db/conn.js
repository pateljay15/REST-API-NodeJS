const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/studentsapi", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})
.then(() => {
    console.log("Connection successfull...")
}).catch((e) => {
    console.log("No connection...")
})