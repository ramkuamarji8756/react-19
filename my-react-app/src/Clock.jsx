import { useEffect, useState } from "react";

const Clock = ({ color }) => {

    const [time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // cleanup
    }, []);

    return (
        <div>
            <h2 style={{
                color: color,
                backgroundColor: "black",
                width: "120px",
                padding: "10px",
                borderRadius: "5px"
            }}>
                {time}
            </h2>
        </div>
    );
}

export default Clock;