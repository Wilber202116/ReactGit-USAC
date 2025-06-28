function AuthSelectImage( {handleImageClick, selectedImage, hadleImageChange, defaultImage} ){
    return (
        <>
            <div onClick={handleImageClick} className="flex flex-col items-center justify-center cursor-pointer">
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
        </>
    );
};

export default AuthSelectImage;