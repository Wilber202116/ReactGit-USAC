
function LoginInput( {label , paramtype, paramId, paramOnChange, paramPlaceholder, paramValue} ){
    return(
        <div className="mb-2">
            <label htmlFor={paramId} className="font-medium mb-2 text-sm">
                {label || ""}
            </label>
            <input 
            onChange={paramOnChange} 
            type={paramtype} 
            id={paramId} 
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder={paramPlaceholder} 
            value={paramValue}
            />
        </div>
    );
};

export default LoginInput;