import {useEffect, useState} from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const handleRandomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }
    const handleCreateRandomHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for(let i=0; i<6; i++){
            hexColor += hex[handleRandomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    const handleCreateRandomRgbColor = () => {
        const rgbColor = `rgb(${handleRandomColorUtility(255)}, ${handleRandomColorUtility(255)}, ${handleRandomColorUtility(255)})`;

        setColor(rgbColor);
    }
    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);

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
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
                Generate Random Color
            </button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "60px",
                    marginTop: "50px",
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}
