import { useState } from 'react'

function Card(){

    const [count, setCount] = useState(0)
    const modifycount = () =>{
        let newCount = count + 1;
        setCount(newCount);
    };

    // let saludo = "";
    return(
        <>
            <h1>mi primer dia usando react y Vite</h1>
            <div className="card">
                <button onClick={modifycount}>
                    count is {count}
                </button>
                <p>
                    {/* {saludo || "Esta vacio escribe algo"} <br /> */}
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    );
};

export default Card