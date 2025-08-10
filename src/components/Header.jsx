import "./Header.css"
function Header(props) { //รับ props มาใช้

    const myStyle = {
        fontSize: "30px",
        padding: "10px", 
        margin: "10px"
    }

    return (
        <nav>
            <h2 style={myStyle}>{props.title}</h2>
            <button>Light/Dark</button>
        </nav>
    );
}

export default Header;