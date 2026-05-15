require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors());
app.use(express.json());

/* ================= TEST ROUTES ================= */

app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

app.get("/test", (req, res) => {
  res.send("Test Route Working ✅");
});

/* ================= CLOUDINARY ================= */

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

/* ================= STORAGE ================= */

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "silver-tech-computer",
    resource_type: "auto",
    format: file.mimetype.split("/")[1]
  })
});

const upload = multer({ storage });

/* ================= MODELS ================= */

const Product = require("./models/product");
const User = require("./models/User");
const Activity = require("./models/Activity");
const Slider = require("./models/Slider");

/* ================= UPLOAD ================= */

app.post("/upload", upload.single("file"), (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No file ❌"
      });
    }

    res.json({
      url: req.file.path
    });

  } catch (err) {

    res.status(500).send(err.message);

  }

});

/* ================= USERS ================= */

app.get("/users", async (req, res) => {

  try {

    const users = await User.find();

    res.json(users);

  } catch (err) {

    res.status(500).send(err.message);

  }

});

/* ================= AUTH ================= */

app.post("/signup", async (req, res) => {

  try {

    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10
    );

    const user = new User({
      ...req.body,
      password: hashedPassword
    });

    await user.save();

    res.json({
      message: "Signup success ✅"
    });

  } catch (err) {

    res.status(500).send(err.message);

  }

});

app.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({
      email: req.body.email
    });

    if (!user) {
      return res.status(400).send("User not found ❌");
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).send("Wrong password ❌");
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      user,
      token
    });

  } catch (err) {

    res.status(500).send(err.message);

  }

});

/* ================= PRODUCTS ================= */

app.get("/products", async (req, res) => {

  try {

    console.log("Products route hit ✅");

    const products = await Product.find();

    console.log(products);

    res.json(products);

  } catch (err) {

    console.log("PRODUCT ERROR:", err);

    res.status(500).json({
      error: err.message
    });

  }

});

app.get("/products/:id", async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    );

    res.json(product);

  } catch (err) {

    res.status(500).send(err.message);

  }

});

app.post("/products", async (req, res) => {

  try {

    const data = {
      ...req.body,

      price: Number(req.body.price),

      media: (req.body.media || []).filter(Boolean),

      isTopSeller:
        req.body.isTopSeller === true ||
        req.body.isTopSeller === "true" ||
        req.body.isTopSeller === 1 ||
        req.body.isTopSeller === "1"
    };

    await new Product(data).save();

    res.send("Added ✅");

  } catch (err) {

    res.status(500).send(err.message);

  }

});

app.put("/products/:id", async (req, res) => {

  try {

    const updated = {
      ...req.body,

      isTopSeller:
        req.body.isTopSeller === true ||
        req.body.isTopSeller === "true" ||
        req.body.isTopSeller === 1 ||
        req.body.isTopSeller === "1"
    };

    await Product.findByIdAndUpdate(
      req.params.id,
      updated
    );

    res.send("Updated ✅");

  } catch (err) {

    res.status(500).send(err.message);

  }

});

app.delete("/products/:id", async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.send("Deleted ✅");

  } catch (err) {

    res.status(500).send(err.message);

  }

});

/* ================= SLIDER ================= */

app.post("/add-slider", async (req, res) => {

  try {

    const { url, type } = req.body;

    if (!url) {
      return res.status(400).send("URL required ❌");
    }

    await new Slider({
      url,
      type: type || "image"
    }).save();

    res.send("Slider Added ✅");

  } catch (err) {

    res.status(500).send(err.message);

  }

});

app.get("/slider", async (req, res) => {

  try {

    const sliders = await Slider.find();

    res.json(sliders);

  } catch (err) {

    res.status(500).send(err.message);

  }

});

app.delete("/slider/:id", async (req, res) => {

  try {

    await Slider.findByIdAndDelete(
      req.params.id
    );

    res.send("Deleted");

  } catch (err) {

    res.status(500).send(err.message);

  }

});

/* ================= ACTIVITY ================= */

app.post("/activity", async (req, res) => {

  try {

    await new Activity(req.body).save();

    res.send("Saved ✅");

  } catch (err) {

    res.status(500).send(err.message);

  }

});

app.get("/activity", async (req, res) => {

  try {

    const activity = await Activity.find();

    res.json(activity);

  } catch (err) {

    res.status(500).send(err.message);

  }

});

/* ================= DATABASE ================= */

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => {
  console.log("MongoDB Connected ✅");
})

.catch((err) => {
  console.log(err);
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});