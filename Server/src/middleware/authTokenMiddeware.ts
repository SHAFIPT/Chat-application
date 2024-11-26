import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../Model/userModal";

interface AuthenticatedRequest extends Request {
    user?: {
        _id: string;
        name: string;
        email: string;
    };
}

export const protect = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret") as { id: string };

            const user = await User.findById(decoded.id).select("-password");
            if (!user) {
                res.status(401);
                throw new Error("Not authorized, user not found");
            }

            // Assign the user to req.user
            req.user = {
                _id: user._id.toString(),
                name: user.name,
                email: user.email,
            };

            next(); // Continue to the next middleware or route
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token provided");
    }
};