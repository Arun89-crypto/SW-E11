import { NextFunction, Request, Response, Router } from 'express';
import { validateRequest } from '../../loaders/validator';
import { updateProfile } from './controller';
import { profileSchema } from './schema';

const dashboardRouter = Router();

dashboardRouter.get('/', (req, res) => {
    res.send("Login Page");
})
dashboardRouter.post('/profile', validateRequest("body", profileSchema), handleProfileChanges);

async function handleProfileChanges(req: Request, res: Response, next: NextFunction) {
    const message = await updateProfile(req.body);
    res.status(message.code).json(message.message);
}

export default dashboardRouter;
