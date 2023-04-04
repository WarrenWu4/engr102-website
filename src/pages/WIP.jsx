/*------------------------------------*COMPLETE*------------------------------------*/
import {Link} from "react-router-dom"
import { FaShare } from "react-icons/fa"

export default function WIP() {

    const pageStyle = {
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Sofia Sans",
        fontWeight: 700,
        textAlign: "center",
    } 

    const msg1Style = {
        width: "70vw",
        color: "#F64662",
        fontSize: "4.5vw",
        marginBottom: "2rem",
    }

    const msg2Style = {
        color: "#ECECEB",
        fontSize: "3.25vw",
    }

    const linkStyle = {
        color: "#ECECEB",
        textDecoration: "none",
        display: "flex",
    }

    const iconStyle = {
        marginLeft: "1vw",
        display: "flex",
        alignItems: "center",
    }

    return (
        <div className="basic-page" style={pageStyle}>

            <div style={msg1Style}>Oops, this feature hasn't been implemented yet.</div>

            <div style={msg2Style}>

                <Link to="/" style={linkStyle}>

                    Return Home
                    <div style={iconStyle}>
                        <FaShare/>
                    </div>

                </Link>

            </div>

        </div>
    )
}