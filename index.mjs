import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import cors from "cors";
app.use(cors());

app.get("/", (req, res) => {
  res.send('hello world');
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
