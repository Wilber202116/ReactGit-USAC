import { Link } from "react-router-dom";
import LoginInput from "./LoginInput";

function LoginForm({email, setEmail, pass, setPass, login}){
    return(
        <div className="bg-gray p-9 m-6 rounded-md ml-4 shadow-lg shadow-[#ace6ec]">
            <center><h2 className="text-3x1 font-semibold mt-5">Social Network</h2></center>
            <h4 className="text-2x1 font-semibold text-gray-400 mb-7">probando probando!</h4>
            <form className="mb-2">
                <LoginInput 
                label={"Correo Electronico"} 
                paramtype={"email"} paramId={"email"} 
                paramPlaceholder={"Example@gmail.com"} 
                paramOnChange={e => setEmail(e.target.value)}
                paramValue={email}
                />
                <LoginInput label={"Constraseña" } 
                paramtype={"password"} 
                paramId={"password"} 
                paramPlaceholder={"********"} 
                paramOnChange={e => setPass(e.target.value)}
                paramValue={pass}
                />
                <div className="text-right">
                    <button onClick={login} type="submit"
                    className="cursor-pointer shadow-lg shadow-[#ace6ec] w-full bg-[#76bdc4] text-white py-2 rounded-md mt-6 shadow-lg shadow-indigo-700/40">
                        Iniciar Sesion  
                    </button>
                    <br />
                    <Link to='/register' className=" text-md py-8 text-blue-500 hover:underline">Registrate aqui</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;