import ContainerMe from "../components/home/Container";
import NavbarHome from "../components/home/NavbarHome";
import { useAuth } from "../context/AuthContext";

function Messages(){
    const {logout} = useAuth();

    return(
        <>
            <div className="flex h-screen w-full">
                <NavbarHome logout={logout}/>
                <main className="flex-grow">
                    <ContainerMe>
                        <div className="flex justify-end w-full">
                            Sala de Mensajes
                        </div>
                    </ContainerMe>
                </main>
            </div>
        </>
    )
};

export default Messages;
