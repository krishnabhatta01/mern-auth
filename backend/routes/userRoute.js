import express from 'express';
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

// old method to write route for to same url
// router.get('/profile', getUserProfile);
// router.put('/profile', updateUserProfile);

// combine version of two same url route
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);


export default router;