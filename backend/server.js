const express = require("express");
const path = require("path");
require("dotenv").config();

const connectDb = require("./config/db");
const productRoutes = require("./routes/product.route");

const { PORT } = process.env;

const dirName = path.resolve();

const app = express();

app.use(express.json());

// API маршруты должны быть определены до статического обслуживания файлов
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirName, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirName, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT || 3000, () => {
  connectDb();
  console.log("Server started at http://localhost:" + PORT);
});
