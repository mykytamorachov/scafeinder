import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';
(<any>mongoose).Promise = global.Promise;

export type UserModel = mongoose.Document & {
  email: string,
  mobile: number,
  name: string,
  gender: string,
  password: string,
  facebook: string,

  comparePassword: (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void,
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    dropDups: true,
    trim: true
  },
  mobile: {
    type: Number,
    unique: true,
    dropDups: true
  },
  registrationDate: Date,
  name: String,
  gender: String,
  age: Number,
  password: String,
  facebook: String,
  tokens: Array,
});

// Password hash middleware.
userSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

userSchema.pre('save', function(next) {
  if (!this.registrationDate) {
      this.registrationDate = new Date();
  }
  next();
});

// Helper method for validating user's password.
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};
const User = mongoose.model('User', userSchema);
export default User;
