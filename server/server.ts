/// <reference types="node" />
// Get dependencies
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as mongoose from "mongoose";
import * as CONSTS from "./constants/consts";

// Connect to MongoDB

mongoose.connect(CONSTS.config.DATABASE_CLOUD || CONSTS.config.DATABASE_LOCAL, {useMongoClient: true});

mongoose.connection.on("error", () => {
  console.log("MongoDB connection error. Please make sure MongoDB is running.");
  process.exit();
});

// Get our API routes
import * as api from './routes/api';

// Create Express server
const app = express();



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname,'../dist')));

// Set our api routes
app.use('/api', api.getApi);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.set("port", CONSTS.config.PORT || 3000);


/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});