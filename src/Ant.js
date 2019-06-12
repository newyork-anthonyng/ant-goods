import { h } from "preact";

const containerStyle = {
    marginBottom: 50
};
const nameStyle = {
    fontSize: 20,
    fontFamily: "Helvetica, sans-serif"
};
const statStyle = {
    fontSize: 18,
    fontFamily: "Helvetica, sans-serif"
};
const oddsStyle = {
    fontFamily: "Helvetica, sans-serif"
};

function Ant({
    name,
    weight,
    length,
    color,
    odds
}) {
    return <div style={containerStyle}>
        <p style={nameStyle}>{name}</p>
        <p style={statStyle}>Weight: {weight}, Length: {length}</p>
        <div style={{ borderRadius: "50%", height: 50, width: 50, backgroundColor: color}}></div>
        <marquee style={oddsStyle}>{odds}</marquee>
    </div>
}

export default Ant;