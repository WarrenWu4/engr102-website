import "../styles/unitblock.css"

export default function UnitBlock(props) {
    let color = "black";
    if (props.color != "undefined") {
        color = props.color;
    }
    return (
        <div className="unit-block" style={{backgroundColor: color}}>
            <div className="unit-tag"><div className="unit-circle"></div></div>
            <div className="unit-num">Unit {props.num}</div>
        </div>
    )
}