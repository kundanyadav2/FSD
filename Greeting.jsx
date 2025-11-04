import { useState }  from "react";

function Greeting(){
    const [message, setMessage] = useState("Welcome to React Components!");

    function changeMessage(){
        setMessage("You clicked the button! 🎉")
    }

    return(
        <div>
            <h2>{message}</h2>
            <button onClick={changeMessage}>Click Me</button>
        </div>
    );
}
export default Greeting;