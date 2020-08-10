const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { json } = require("body-parser");
const User = require("./models/user");
const config = require("./config/key");
const { auth } = require("./middleware/auth");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB is connected."))
  .catch((err) => console.log(err));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/user/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      userDate: doc,
    });
  });
});

app.post("/api/user/login", (req, res) => {
  //find the email in DB
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found.",
      });
    }
    //compare the passwords
    //generate new token for user

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "Auth failed, password not matched.",
        });
      }
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_token", user.token).status(200).json({
          loginSuccess: true,
          message: "Auth successed.",
        });
      });
    });
  });
});

app.get("/", (req, res) => {
  return res.json("hey");
});

app.get("/api/user/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    email: req.user.email,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    role: req.user.role,
  });
});
app.get("/api/user/logout", auth, (req, res) => {
  User.findByIdAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});
port = process.env.PORT || 5000;
app.listen(port);
console.log(`app is listening in port:${port} `);
