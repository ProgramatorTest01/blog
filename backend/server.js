let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./db/db");

const articleRoute = require("./routes/article.route");
const usersRoute = require("./routes/users.route");
const adminRoute = require("./routes/admin.route");
const commentRoute = require("./routes/comment.route");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Connected data!");
    },
    (error) => {
      console.log("Error during connection attempt: " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/articles", articleRoute);
app.use("/users", usersRoute);
app.use("/admin", adminRoute);
app.use("/comments", commentRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Connected. Port: " + port);
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).send(err.message);
});
