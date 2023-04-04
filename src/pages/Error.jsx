/*------------------------------------*COMPLETE*------------------------------------*/
export default function Error() {

    const errorStyle = {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ECECEB",
        fontSize: "5vw",
        fontFamily: "Sofia Sans",
        fontWeight: 700,
    }

    return (
        <div className="basic-page">
            <div style={errorStyle}>Uknown Page</div>
        </div>
    )
}