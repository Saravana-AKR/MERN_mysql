import express from 'express';
const router = express.Router();


import {
    register,
    loginUser,
    getAllRegister
} from '../controllers/authController.js'

import {validateRegisterInput} from '../middleware/validationMiddleware.js'


router.post('/api/crm/register',validateRegisterInput,register);
router.post('/api/crm/login',loginUser);
router.get('/api/crm/register',getAllRegister);

export default router;