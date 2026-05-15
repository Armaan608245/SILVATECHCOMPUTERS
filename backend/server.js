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

/* ================= UPLOAD ================= */
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file ❌" });
  res.json({ url: req.file.path });
});

/* ================= MODELS ================= */
const Product = require("./models/product");
const User = require("./models/User");
const Activity = require("./models/Activity");
const Slider = require("./models/Slider");

/* ================= USERS ================= */
app.get("/users", async (req, res) => {
  res.json(await User.find());
});

/* ================= AUTH ================= */
app.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      ...req.body,
      password: hashedPassword
    });

    await user.save();
    res.json({ message: "Signup success ✅" });

  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("User not found ❌");

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) return res.status(400).send("Wrong password ❌");

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ user, token });
});

/* ================= PRODUCTS ================= */
app.get("/products", async (req, res) => {
  res.json(await Product.find());
});

app.get("/products/:id", async (req, res) => {
  res.json(await Product.findById(req.params.id));
});

app.post("/products", async (req, res) => {
  const data = {
    ...req.body,
    price: Number(req.body.price),
    media: (req.body.media || []).filter(Boolean),

    // 🔥 FIXED BOOLEAN (IMPORTANT)
    isTopSeller:
      req.body.isTopSeller === true ||
      req.body.isTopSeller === "true" ||
      req.body.isTopSeller === 1 ||
      req.body.isTopSeller === "1"
  };

  await new Product(data).save();
  res.send("Added ✅");
});

app.put("/products/:id", async (req, res) => {
  const updated = {
    ...req.body,

    // 🔥 FIX ALSO HERE
    isTopSeller:
      req.body.isTopSeller === true ||
      req.body.isTopSeller === "true" ||
      req.body.isTopSeller === 1 ||
      req.body.isTopSeller === "1"
  };

  await Product.findByIdAndUpdate(req.params.id, updated);
  res.send("Updated ✅");
});

app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Deleted ✅");
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
  res.json(await Slider.find());
});

app.delete("/slider/:id", async (req, res) => {
  await Slider.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

/* ================= ACTIVITY ================= */
app.post("/activity", async (req, res) => {
  await new Activity(req.body).save();
  res.send("Saved ✅");
});

app.get("/activity", async (req, res) => {
  res.json(await Activity.find());
});

/* ================= DATABASE ================= */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(console.log);

/* ================= SERVER ================= */
app.listen(5000, () => {
  console.log("Server running on https://silvatechcomputers.onrender.com 🚀");
});