import * as passport from 'passport';
import * as request from 'request';
import { Request, Response, NextFunction } from 'express';
import * as passportLocal from 'passport-local';
import * as passportFacebook from 'passport-facebook';
import * as _ from 'lodash';
import { default as User } from '../models/User';
import AUTH_CONFIG from '../constants/auth_config';

const LocalStrategy = passportLocal.Strategy;
const FacebookStrategy = passportFacebook.Strategy;

passport.serializeUser<any, any>((user, done) => {
  done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Sign in using Email and Password.
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() }, (err, user: any) => {
    if (err) { return done(err); }
    if (!user) {
      return done(undefined, false, { message: `Email ${email} not found.` });
    }
    user.comparePassword(password, (error: Error, isMatch: boolean) => {
      if (error) { return done(error); }
      if (isMatch) {
        return done(undefined, user);
      }
      return done(undefined, false, { message: 'Invalid email or password.' });
    });
  });
}));

// Sign in with Facebook.
passport.use(new FacebookStrategy({
  clientID: AUTH_CONFIG.FACEBOOK_ID,
  clientSecret: AUTH_CONFIG.FACEBOOK_SECRET,
  callbackURL: '/auth/facebook/callback',
  profileFields: ['name', 'email', 'link', 'gender'],
  passReqToCallback: true
}, (req: any, accessToken, refreshToken, profile, done) => {
  if (req.user) {
    User.findOne({ facebook: profile.id }, (err, existingUser) => {
      if (err) { return done(err); }
      if (existingUser) {
        console.log('There is already a Facebook account that belongs to you.');
        done(err);
      } else {
        User.findById(req.user.id, (error, user: any) => {
          if (error) { return done(error); }
          user.facebook = profile.id;
          user.tokens.push({ kind: 'facebook', accessToken });
          user.save((Err: Error) => {
            console.log('Facebook account has been linked.');
            done(Err, user);
          });
        });
      }
    });
  } else {
    User.findOne({ facebook: profile.id }, (err, existingUser) => {
      if (err) { return done(err); }
      if (existingUser) {
        return done(undefined, existingUser);
      }
      User.findOne({ email: profile._json.email }, (error, existingEmailUser) => {
        if (error) { return done(error); }
        if (existingEmailUser) {
          console.log('There is already an account using this email address.');
          done(err);
        } else {
          const user: any = new User();
          user.email = profile._json.email;
          user.facebook = profile.id;
          user.tokens.push({ kind: 'facebook', accessToken });
          user.save((Err: Error) => {
            done(Err, user);
          });
        }
      });
    });
  }
}));

// Login Required middleware.
export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

// Authorization Required middleware.
export let isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  const provider = req.path.split('/').slice(-1)[0];

  if (_.find(req.user.tokens, { kind: provider })) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};
