import {useState} from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const handleCreateRandomColor = () => {

    }
    return (
        <div style={
            {
                backgroundColor: color,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                color: "white"
            }
        }>
            <h1>Random Color</h1>
            <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button onClick={handleCreateRandomColor}>Generate Random Color</button>
        </div>
    )
}
