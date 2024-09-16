import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: "Vous n'êtes pas autorisé à accéder à cette ressource" });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if (error) {
            return res.status(403).json({ message: 'Votre session a expiré, veuillez vous reconnecter' });
        }
        req.user = decoded.nickname;
        next();
    });
};

module.exports = verifyToken;
