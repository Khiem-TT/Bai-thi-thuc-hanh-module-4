import express from "express";
import bodyParser from "body-parser";
import studentRouter from "./src/routers/student.router";
import {Database} from "./src/schemas/Database";

const PORT = 8080;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

Database.connectDB()
    .then(() => console.log('DB connected!'))
    .catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(studentRouter);

app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});