/*------------------------------------*COMPLETE*------------------------------------*/
export default function Error() {

    const errorStyle = {
        color: "var(--contrast)",
        fontSize: "5vw",
        fontFamily: "Sofia Sans",
        fontWeight: 700,
    }

    return (
        <div className="basic-page center">
            <div style={errorStyle}>Uknown Page</div>
        </div>
    )
}