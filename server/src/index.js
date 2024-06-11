import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const connectionString =
    "mongodb+srv://manikhilalpure:41i86IK7Fau7N6yW@finance-tracker.r3fopex.mongodb.net/";

mongoose
    .connect(connectionString)
    .then((message) => {
        console.log("Connection made successfully to mongoDB: ");
    })
    .catch((err) => {
        console.log("There was an error while connecting to mongoDB: " + err);
    });

app.get("/", function (req, res) {
    res.send("hmm welcome brother");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started!");
});
