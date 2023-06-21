import "./TimeDisplay.css";

export default function TimeDisplay({value, type}) {
    return (
        <div className="timeDisplay">
            <p className="countdownValue">{value} {type !== "Seconds" && <span className="separator">:</span>}</p>
            <span>{type}</span>
        </div>
    );
}
