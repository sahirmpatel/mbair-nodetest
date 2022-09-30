import express from "express";

const app = express();
const PORT = 8080;
app.get("/", (res, req) => {
  req.send("Test 123");
});

app.listen(PORT, () => console.log("listening on port " + PORT));
