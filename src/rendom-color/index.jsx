import { useEffect, useState } from "react";

const getRandomIndex = (length) => Math.floor(Math.random() * length);

const createRandomHexColor = () => {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomIndex(hex.length)];
    }
    return hexColor;
};

const createRandomRgbColor = () => {
    const rgbColor = `rgb(${getRandomIndex(256)}, ${getRandomIndex(256)}, ${getRandomIndex(256)})`;
    return rgbColor;
};

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    useEffect(() => {
        const randomColor = typeOfColor === "rgb" ? createRandomRgbColor() : createRandomHexColor();
        setColor(randomColor);
    }, [typeOfColor]);

    const handleColorTypeChange = (newType) => {
        setTypeOfColor(newType);
    };

    return (
        <div
            style={{
                backgroundColor: color,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                color: "white",
            }}
        >
            <h1>Random Color</h1>
            <button onClick={() => handleColorTypeChange("hex")}>Create HEX Color</button>
            <button onClick={() => handleColorTypeChange("rgb")}>Create RGB Color</button>
            <button onClick={() => setColor(typeOfColor === "hex" ? createRandomHexColor() : createRandomRgbColor)}>
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
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}

