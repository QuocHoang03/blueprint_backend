import express from "express";
import apiRoute from "./routes/api";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
require("dotenv").config();
const cors = require("cors");
import { createJWT, verifyToken } from "./middleware/JWTAction";

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// test connection db
connection();

// test JWT
createJWT();
let decodedData = verifyToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSG9hbmciLCJhZGRyZXNzIjoiUXVhbmcgTmdhaSIsImlhdCI6MTcwOTMxNzAzOX0.qSnJ3ZQzp4hV1Ak32pIIDcnpICoNf5EM9ZDp1GeTIVQ"
);
console.log(decodedData);

// routes
apiRoute(app);

app.listen(PORT, () => {
  console.log(">>> JWT Backend is running on the port = " + PORT);
});
