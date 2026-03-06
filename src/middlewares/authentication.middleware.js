import jwt from "jsonwebtoken";

function authenticate(req, res, next) {

    const token = req.cookies?.accessToken;
    const JWTSECRET = process.env.JWT_SECRET;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token" });
    }

    try {
        const decoded = jwt.verify(token, JWTSECRET);
        req.user = decoded;
        console.log(req.user);

        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

export default authenticate;