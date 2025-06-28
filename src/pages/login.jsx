import { useState } from "react";
import AuthImage from "../components/auth/AuthImage";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";

function Logina() {
    const loginImage = "https://i.pinimg.com/736x/32/97/46/329746973bfb7333d48d3650cfc37d3a.jpg"

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const login = (e) =>{
        e.preventDefault()
        console.log(email, pass) 
    }

    const fields = [
        {
            component: AuthInput,
            props: {
                label: "Correo Electronico",
                paramtype: "email",
                paramId: "email",
                paramPlaceholder: "Example@gmail.com",
                paramOnChange: e => setEmail(e.target.value),
                paramValue: email
            },
        },
        {
            component: AuthInput,
            props: {
                label: "Contraseña",
                paramtype: "password",
                paramId: "password",
                paramPlaceholder: "********",
                paramOnChange: e => setPass(e.target.value),
                paramValue: pass
            }
        }
    ]

    return(
        <>
            <div className="flex justify-center items-center h-screen drop-shadow-x1 mt-1">
                <AuthImage imageLink={loginImage} paramAlt={"i'll take some"}/>
                <AuthForm fields={fields}
                    paramAction={login}
                    titleButton={"Iniciar Sesion"}
                    titleLink={"Registrarse"}
                    paramRoot={'/register'}
                />
                
            </div>
            
        </>
    )
}

export default Logina;