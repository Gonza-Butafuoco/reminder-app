import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient(); 


export async function POST(req: Request ){
    const  {name , email , password } = await req.json();

    const hashedPassword = bcrypt.hashSync(password , 8)

    try{
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password : hashedPassword
            },
        });
        return new Response(JSON.stringify(user) , {status : 201});
    } catch (error) {
        return new Response(JSON.stringify({error : 'Error creating user' }) , {status: 500})
    }
}