import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

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
        const {sub} = verify(token, "8950aadffc5e56c991c6a70f2936988e") as IPayload;
        request.user_id = sub;
    } catch (error) {
        return response.status(401).end();
    }

    //Recuperar informações do usuário
    return next();
}