
function AuthImage({imageLink, paramAlt}){
    return(
        <div className="hidden md:block ml-4 h-1/2 drop-shadow-xl">
            <img className="h-full object-cover rounded-md" 
            src={imageLink} 
            alt={paramAlt} />
        </div>
    );
}

export default AuthImage;