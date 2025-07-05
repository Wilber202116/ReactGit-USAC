import NavbarHome from "../components/home/NavbarHome";
import { useAuth } from "../context/AuthContext";
import ContainerMe from "../components/home/container";

function Home(){
    const {user, logout} = useAuth();
    return(
        <>
            <div className="flex h-screen w-full">
                <NavbarHome logout={logout}/>
                <ContainerMe>
                    <main className="flex justify-center text-center w-full">
                        <div className="mb-2">
                            <div className="flex flex-col items-center justify-center">
                                <img className="object-cover w-full h-full" 
                                src={user.picture} 
                                alt="Perfil" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="font-medium mb-2 text-sm" >Nombre</span>
                            <p className="w-full px-3 py-2">{user.name}</p>
                        </div>
                        <div className="mb-2">
                            <span className="font-medium mb-2 text-sm ">Correo Electronico</span>
                            <p className="w-full px-3 py-2">{user.email}</p>
                        </div>
                    </main>
                </ContainerMe>
            </div>
        </>
    );
}

export default Home;