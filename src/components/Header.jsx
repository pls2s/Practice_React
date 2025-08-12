import "./Header.css"
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


function Header(props) { //รับ props มาใช้
    const mode = props.mode
    const setMode = props.setMode
    
    function toggleMode(){
        setMode(mode === "light" ? "dark" : "light")
    }


    const myStyle = {
        fontSize: "30px",
        padding: "10px", 
        margin: "10px"
    }

    return (
        <nav>
            <h2 style={myStyle}>{props.title}</h2>
            <span onClick={toggleMode}  > 
                {mode === "light" ? <IoSunnySharp size={30} /> : <IoMoonSharp size={30}/>}
            </span>
            {console.log(mode)}
        </nav>
    );
}

export default Header;