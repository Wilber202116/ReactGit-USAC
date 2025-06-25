import { useState } from "react";
import LoginImage from "../components/auth/LoginImage";
import LoginForm from "../components/auth/LoginForm";

function Logina() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const login = (e) =>{
        e.preventDefault()
        console.log(email, pass) 
    }

    return(
        <>
            <div className="flex justify-center items-center h-screen drop-shadow-x1 mt-1">
                <LoginImage />
                <LoginForm email={email} 
                setEmail={setEmail} 
                pass={pass} 
                setPass={setPass} 
                login={login }
                />
                
            </div>
            
        </>
    )
}

export default Logina;