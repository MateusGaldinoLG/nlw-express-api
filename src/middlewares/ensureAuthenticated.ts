import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import {tokenKey} from "../JWTKey";
const JWTKey = tokenKey;

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    //Receber o token

    const authToken = request.headers.authorization
    
    //Validar se token está preenchido

    if(!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ");

    
    try {
        //Verificar se o token é valido
        const {sub} = verify(token, JWTKey!) as IPayload;
        request.user_id = sub;
    } catch (error) {
        return response.status(401).end();
    }

    //Recuperar informações do usuário
    return next();
}