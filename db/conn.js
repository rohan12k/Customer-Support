// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// const mongodbconn = mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {})
//   .catch(() => {});

// module.exports = mongodbconn;

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
//mongodb://localhost:27017\
//mongodb+srv://rohan:rohan12@cluster0.sgk0bzr.mongodb.net/
//mongodb+srv://rohan:rohan12@cluster0.sgk0bzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://rohan:rohan12@cluster0.sgk0bzr.mongodb.net/New3?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, err => {
        if (err) throw err;
        console.log('Connected to MongoDB!')
    }

)

module.exports = mongoose.connection;