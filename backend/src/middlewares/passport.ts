import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { config } from '../helpers';
import prisma from '../helpers/client';

/**
 * JSON Web Token strategy
 */

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.jwtSecret,
        },
        async (jwtPayload, next) => {
            const { id } = jwtPayload;
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if (!user) next('User not found');
            next(null, user);
        },
    ),
);
