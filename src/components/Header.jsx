import "./Header.css"
function Header() {

    const myStyle = {
        fontSize: "30px",
        padding: "10px", 
        margin: "10px"
    }
    
    return (
        <nav>
            <h2 style={myStyle}>App Header</h2>
            <button>Light/Dark</button>
        </nav>
    );
}

export default Header;