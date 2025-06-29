import { Link } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

// email, setEmail, pass, setPass, login esto se reemplazo por Fields

function AuthForm({ fields }){
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
            </form>
        </div>
    )
}

export default AuthForm;