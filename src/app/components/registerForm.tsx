import { useState } from "react";

interface RegisterFormProps{
    onRegister: (name: string, email: string, password: string) => void;
}

const RegisterForm : React.FC<RegisterFormProps>  = ({onRegister}) => {
    const [name , setName] = useState('')
}