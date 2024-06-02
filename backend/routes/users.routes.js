import express from 'express';
import  { register, login, logout ,changePassword } from '../controllers/auth.controller.js'
import passport from 'passport';


export const router = express.Router();

router.post('/register', register);


router.post('/login', login);


router.get('/logout', logout);


router.post('/change-password', changePassword);

router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ message: 'You are authorized', user: req.user });
  }
);


