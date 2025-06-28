import { Link } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

// email, setEmail, pass, setPass, login esto se reemplazo por Fields

function AuthForm({ fields, paramAction, titleButton, titleLink, paramRoot }){
    return(
        <div className="bg-gray p-9 m-6 rounded-md ml-4 shadow-lg shadow-[#ace6ec]">
            <center><h2 className="text-3x1 font-semibold mt-5">Social Network</h2></center>
            <h4 className="text-2x1 font-semibold text-gray-400 mb-7">probando probando!</h4>
            <form className="mb-2">
                {
                    // Se van a renderizar la cantidad de componentes 
                    // que nosotros enviemos
                    /*for (let field; field<fields.length; field++){
                        const Component = fields[field].component;
                        <Copmonent key=(field) (...fields[field].props) />
                    }*/
                    fields.map((field, index) => {
                        const Component = field.component;
                        return <Component key={index} {...field.props} />
                    })
                }
                {/*Se cambio esto por el fields para sacar mas rapido estos
                componentes
                <AuthInput 
                label={"Correo Electronico"} 
                paramtype={"email"} paramId={"email"} 
                paramPlaceholder={"Example@gmail.com"} 
                paramOnChange={e => setEmail(e.target.value)}
                paramValue={email}
                />
                <AuthInput label={"Constraseña" } 
                paramtype={"password"} 
                paramId={"password"} 
                paramPlaceholder={"********"} 
                paramOnChange={e => setPass(e.target.value)}
                paramValue={pass}
                /> */}
                <AuthButton 
                paramAction={paramAction}
                titleButton={titleButton}
                titleLink={titleLink}
                paramRoot={paramRoot}
                />
            </form>
        </div>
    )
}

export default AuthForm;