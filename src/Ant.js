import { h } from "preact";

function Ant({
    name,
    weight,
    length,
    color,
    odds
}) {
    return <div>
        <span>{name}</span>
        <p>Weight: {weight}</p>
        <p>Length: {length}</p>
        <div style={{ borderRadius: "50%", height: 50, width: 50, backgroundColor: color}}></div>
        <span style={{ fontSize: 100 }}>{odds}</span>
    </div>
}

export default Ant;