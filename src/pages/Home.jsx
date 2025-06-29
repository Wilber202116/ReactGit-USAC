import NavbarHome from "../components/home/NavbarHome";
import { useAuth } from "../context/AuthContext";

function Home(){
    const {user, logout} = useAuth();
    return(
        <>
            <div className="flex h-screen w-full">
                <NavbarHome logout={logout}/>
            </div>
            <h1 className="text-3xl font-bold mb-4">Bievenido, { user.name }</h1>
        </>
    );
}

export default Home;