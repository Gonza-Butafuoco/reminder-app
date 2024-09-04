import { PrismaClient } from "@prisma/client" ;
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';


export async function POST(req :Request){
    const {email , password} = await req.json();

    const user = await prisma.user.findUnique({
        where: {email},
    });

    if (user && bcrypt.compareSync(password , user.password)){
        const token = jwt.sign({ id: user.id, name: user.name , email: user.email} , JWT_SECRET, {
            expiresIn:'1h'
        });

        return new Response(JSON.stringify({token}) , {status: 200});
    } else{
        return new Response(JSON.stringify({error: 'Invalid email or password'}), {status: 401});
    }
}