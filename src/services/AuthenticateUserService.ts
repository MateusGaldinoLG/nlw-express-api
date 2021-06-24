import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserRepositories } from "../repositories/UserRepositories"


interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        //verificar se email existe

        const usersRepositories = getCustomRepository(UserRepositories);
        const user = await usersRepositories.findOne({
            email
        })

        if(!user){
            //boa prática de autenticação
            throw new Error("Email/Password incorrect");
        }

        //verificar se senha está correta

        const passwordMatch: boolean = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        //gerar o token

        const token: string = sign({
            email: user.email
        }, "8950aadffc5e56c991c6a70f2936988e", {
            subject: user.id,
            expiresIn: "1d" 
        });

        return token;
    }
}

export {AuthenticateUserService}