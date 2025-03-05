import express from "express";
import mongoose from "mongoose";

const app = express();
(async function () {
  try {
    await mongoose.connect(
      "mongodb+srv://ayushsinghcs21:KtXo2xL1KRrKfs8B@cluster0.4b5am.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected To Database");
  } catch (error) {
    console.log(error);
  }
})();

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});
