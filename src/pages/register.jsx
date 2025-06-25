import { useState } from "react";

function Register(){
    const defaultImage = 'https://i.pinimg.com/736x/e5/87/87/e58787fdb75a5bc6db321f32a6a78d3d.jpg'
    const [selectedImage, setSelectedImage] = useState(defaultImage);

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

    return(
        <>
            <div className="flex justify-center items-center h-screen drop-shadow-x1 mt-1">
                <div className="hidden md:block ml-4 h-1/2 drop-shadow-xl">
                    <img src="https://i.pinimg.com/736x/20/5e/c6/205ec6d22ee47d3cce846eb397972b6f.jpg" alt="Si funciona?" className="h-full object-cover rounded-md" />
                </div>

                <div className="bg-gray-100 p-6 m-6 rounded-md">
                    <h2 className="text-3xl font-semibold mt-10">Social Network</h2>
                    <h4 className="text-2xl font-semibold text-gray-500 mb-7">Crear Cuenta</h4>
                    <form className="mb-2">
                        <div onClick={handleImageClick} className="flex flex-col items-center justify-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden">
                                <img className="object-cover w-full h-full" src={selectedImage} alt="Perfil" />
                            </div>
                            <input onChange={hadleImageChange} type="file" className="hidden" id="profilePicture" accept="image/*"/>
                            {
                                (selectedImage != defaultImage) ? 
                                (<p className="text-sm font-bold text-blue-700">Foto de perfil</p>) : 
                                (<p className="text-sm font-bold text-red-800">Selecciona una imagen</p>)
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;