import express from "express";

const app = express();
const PORT = 8080;
app.get("/", (res, req) => {
  req.send("Hello World");
});

app.listen(PORT, () => console.log("listening on port " + PORT));
