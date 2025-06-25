import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Navbar(){
    return (
    <nav>
        <h2>NavBar desde React y JSX</h2>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </nav>);
};

export default Navbar;