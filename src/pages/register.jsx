import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import AuthImage from "../components/auth/AuthImage";
import AuthSelectImage from "../components/auth/AuthSelectImage";
import AuthForm from "../components/auth/AuthForm";
import AuthButton from "../components/auth/AuthButton";

function Register(){

    const registerImage = "https://i.pinimg.com/736x/20/5e/c6/205ec6d22ee47d3cce846eb397972b6f.jpg"
    const defaultImage = 'https://i.pinimg.com/736x/e5/87/87/e58787fdb75a5bc6db321f32a6a78d3d.jpg'
    const [selectedImage, setSelectedImage] = useState(defaultImage);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const register = (e) => {
        e.preventDefault()
        console.log(name, email, pass);
    }

    const handleImageClick = () =>{
        document.getElementById('profilePicture').click();
    };

    const hadleImageChange = (event) => {
        const file = event.target.files[0];

        if (file){
            // FileReader: Objeto de js sirve para leer archivos
            const reader = new FileReader();
            reader.onload = (e) =>{
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }else{
            setSelectedImage(defaultImage);
        };
    };

    const fields = [
        {
            component: AuthSelectImage,
            props: {
                handleImageClick: handleImageClick,
                selectedImage: selectedImage,
                hadleImageChange: hadleImageChange,
                defaultImage: defaultImage
            },
        },
        {
            component: AuthInput,
            props: {
                label: "Nombre",
                paramtype: "text",
                paramId: "name",
                paramPlaceholder: "Ingresa tu nombre",
                paramOnChange: e => setName(e.target.value),
                paramValue: name
            },
        },
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
        },
        {
            component: AuthButton,
            props: {
                paramAction: register,
                titleButton: "Registrarse",
                titleLink: "Iniciar Sesion",
                paramRoot: '/'
            }
        }
    ]

    return(
        <>
            <div className="flex justify-center items-center h-screen drop-shadow-x1 mt-1">

                <AuthImage imageLink={registerImage} paramAlt={"pistogato"} />

                <div className="bg-gray-100 p-6 m-6 rounded-md">
                    <h2 className="text-3xl font-semibold mt-10">Social Network</h2>
                    <h4 className="text-2xl font-semibold text-gray-500 mb-7">Crear Cuenta</h4>
                    <div className="mb-2">
                        <AuthForm fields={fields}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;