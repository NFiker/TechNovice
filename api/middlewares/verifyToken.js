// Middleware to know if user is logged in by checking the token
import { PrismaClient } from '@prisma/client'; // Adjust the import based on your project structure
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const isLoggedIn = async (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization;

    // Remove the Bearer prefix from the token
    // If the token is not prefixed with Bearer, we set it to null
    const tokenWithoutBearer = token ? token.slice(7) : null;

    console.log(token);

    // If no token is found, we respond with a 401 status code
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(tokenWithoutBearer, process.env.ACCESS_TOKEN_SECRET);

        // Find the user by the id from the token
        const user = await prisma.users.findUnique({
            where: { user_id: decoded.id },
        });

        // If no user is found, we respond with a 401 status code
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Attach the user to the request object
        req.user = user;
        next();
    } catch (error) {
        // If an error occurs, we respond with a 500 status code
        return res.status(500).json({ message: error.message });
    }
};

export default isLoggedIn;
