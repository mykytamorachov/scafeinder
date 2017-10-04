/// <reference types="node" />
// Get dependencies
import * as express from 'express';
import * as session from 'express-session';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as passport from 'passport';
import * as expressValidator from 'express-validator';
import * as connectMongo from 'connect-mongo';
import * as lusca from 'lusca';
import * as path from 'path';
import * as mongo from 'connect-mongo';
import * as mongoose from 'mongoose';
import * as errorHandler from 'errorhandler';
(<any>mongoose).Promise = global.Promise;

import DATABASE_CONFIG from './constants/database_config';
import * as userController from './api/user';
import * as apiController from './api/social';
import * as cafeController from './api/cafe';
import { verifyToken } from './api/auth';
import * as passportConfig from './config/passport';

// Create Express server
const app = express();

const MongoStore = connectMongo(session);

// Connect to MongoDB
mongoose.connect(DATABASE_CONFIG.DATABASE_CLOUD || DATABASE_CONFIG.DATABASE_LOCAL, {useMongoClient: true});
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

const options: cors.CorsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:3000',
  preflightContinue: false
};
app.use(cors(options));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'epam2017',
  store: new MongoStore({
    url: DATABASE_CONFIG.DATABASE_CLOUD || DATABASE_CONFIG.DATABASE_LOCAL,
    autoReconnect: true
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Point static path to dist
app.use(express.static(path.join(__dirname), { maxAge: 31557600000 }));

// Primary app routes.
app.get('/login', userController.getLogin);
app.post('/login', verifyToken, userController.postLogin);
app.get('/logout', verifyToken, userController.logout);
app.get('/register', userController.getSignup);
app.post('/register', verifyToken, userController.postSignup);
app.get('/cafes', cafeController.getCafes);
app.get('/profile/:id', userController.getUserDataById);
app.put('/profile/:id', userController.updateUserData);
app.get('/cafe/:cafeId', cafeController.getCafeById);

// OAuth authentication routes. (Sign in)
app.get('/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname) + '/index.html');
});

// Error Handler.
app.use(errorHandler());

// Get port from environment and store in Express.
app.set('port', DATABASE_CONFIG.PORT || 3000);

// Listen on provided port, on all network interfaces.
app.listen(app.get('port'), () => {
  console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});
