import { h } from "preact";

const style = {
    color: "#fff",
    background: "#131313",
    height: 100,
    width: "100%",
    cursor: "pointer",
    fontSize: 24,
    borderRadius: 10,
    textTransform: "uppercase"
};

function AntButton({ onClick, children }) {
    return <button style={style} onClick={onClick}>{children}</button>
}

export default AntButton;