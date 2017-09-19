import * as passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import { LocalStrategyInfo } from 'passport-local';
import { default as User, UserModel } from '../models/User';

// * GET /login  * Login page.
export const getLogin = (req: Request, res: Response) => {
  if (req.user) {
    return res.redirect('/');
  }
  console.log('getLogin...');
  res.json({msg: `It's a login page`});
};

// * POST /login  * Sign in using email and password.
export const postLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log('postLogin body is ', req.body);
  console.log('postLogin sessionID is', req.sessionID);
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    console.log('postLogin errors are', errors);
    return res.redirect('/login');
  }

  passport.authenticate('local', (err: Error, user: UserModel, info: LocalStrategyInfo) => {
    if (err) { return next(err); }
    if (!user) {
      console.log('errors', info);
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      console.log('Success! req.user is ...', req.user);
      console.log('Success! req.session is ...', req.sessionID);
      console.log('Success! You are logged in.');
      res.json({sessionID: req.sessionID});
      // res.redirect('/login');
    });
  })(req, res, next);
};

// * GET /logout   * Log out.
export const logout = (req: Request, res: Response) => {
  req.logout();
  res.redirect('/');
};

// * GET /signup  * Signup page.
export const getSignup = (req: Request, res: Response) => {
  if (req.user) {
    return res.redirect('/');
  }
  console.log('getSignup...');
  res.json({msg: `It's a registration page`});
};

// * POST /signup  * Create a new local account.
export const postSignup = (req: Request, res: Response, next: NextFunction) => {
  console.log('postSignup body is ', req.body);
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password must be at least 4 characters long').len({ min: 4 });
  req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
  req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    console.log('errors', errors);
    return res.redirect('/register');
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) {
      console.log('Account with that email address already exists.');
      return res.redirect('/register');
    }
    user.save((err) => {
      if (err) { return next(err); }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
};
