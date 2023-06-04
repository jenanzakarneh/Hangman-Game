import express from 'express';
import { signIn, singUp } from '../controllers/user';


const router= express.Router();
router.post('/register',singUp);
router.post('/login',signIn);


export default router;