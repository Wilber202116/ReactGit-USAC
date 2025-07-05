import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider( { children } ){
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const res = await fetch('https://randomuser.me/api?results=10');
                const data = await res.json();
                setUsers(data.results);
                console.log(data.results)

                const storedUser = localStorage.getItem("user");
                if(storedUser){
                    setUser(JSON.parse(storedUser));
                    navigate("/home");
                }

            }catch(error){
                console.error("Error al obtener usuarios", error)
            }finally{
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    const login = (email,password) => {
        const matchedUser = users.find(u => u.email === email && u.login.password === password );

        if(matchedUser){
            let nameUser = `${matchedUser.name.first} ${matchedUser.name.last}`
            
            const loggedUser = {

                name: nameUser,
                email: matchedUser.email,
                picture: matchedUser.picture.large,
                gender: matchedUser.gender
            }
            setUser(loggedUser);
            localStorage.setItem("user", JSON.stringify(loggedUser));
            // window.location.href = '/home'
            navigate("/home")
        }else{
            console.log("Error al ingresar el usuario")
            alert("Email de usuario o contraseña incorrectos")
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate('/');
    }

    return(
        <AuthContext.Provider value={{user, loading,login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);