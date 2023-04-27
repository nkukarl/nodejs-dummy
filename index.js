const cors = require("cors");
const express = require("express");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

router.get("/data", (_, res) => {
  res.send({ key1: "value1", key2: "value2" });
});

const PORT = 80;
app.listen(PORT, () => console.log("Server is running on Port: " + PORT));
