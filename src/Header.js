import { h } from "preact";

const headerStyle = {
    fontSize: 32,
    fontFamily: "Helvetica, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Ant Goods</h1>
            <div style={{fontSize: 200}}>🐜</div>
        </header>
    );
}

export default Header;