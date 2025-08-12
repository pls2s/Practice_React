import "./Header.css"
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
            <button onClick={toggleMode}>Swich Mode : {mode}</button> {/*สลับโหมดเชื่อมต่อกับ toggleMode function*/}
            {console.log(mode)}
        </nav>
    );
}

export default Header;