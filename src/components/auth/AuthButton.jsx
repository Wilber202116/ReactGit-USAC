import { Link } from "react-router-dom";

function AuthButton({paramAction, paramRoot, titleButton, titleLink}){
    return (
        <div className="text-right">
            <button onClick={paramAction} type="submit"
            className="cursor-pointer shadow-lg shadow-[#ace6ec] w-full bg-[#76bdc4] text-white py-2 rounded-md mt-6 shadow-lg shadow-indigo-700/40">
                {titleButton}
            </button>
            <br />
            <Link to={paramRoot} className=" text-md py-8 text-blue-500 hover:underline">{titleLink}</Link>
        </div>
    );
};

export default AuthButton;