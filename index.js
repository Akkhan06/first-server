const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

app.get("/categories", (req, res) => {
  console.log(categories);
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selected = news.find((x) => x._id === id);
  res.send(selected);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const categoryId = news.filter((x) => x.category_id === id);
    res.send(categoryId);
  }
});
app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});
