import { NextFunction, Request, Response } from "express";


export function ensureAdmin(request: Request, response: Response, next: NextFunction){
    //verificar se usuario admin
    const admin = true;

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "user must be admin"
    })
}