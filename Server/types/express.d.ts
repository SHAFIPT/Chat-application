// src/types/express.d.ts
declare global {
    namespace Express {
        interface Request {
            user?: {
                _id: string;
                name: string;
                email: string;
            };
        }
    }
}

export {}; // This empty export makes it a module
