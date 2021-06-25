import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    //verificar se usuario admin

    const {user_id} = request;

    const usersRepositories = getCustomRepository(UserRepositories);
    const user = await usersRepositories.findOne(user_id);
    const admin = user?.admin

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "user must be admin"
    })
}