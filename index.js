import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;
app.get("/", (res, req) => {
  req.json({ message: "Docker is live 🐳" });
});

app.listen(PORT, () => console.log("listening on port " + PORT));
