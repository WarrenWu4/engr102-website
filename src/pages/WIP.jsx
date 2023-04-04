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
        fontSize: "8rem",
        marginBottom: "5rem",
    }

    const msg2Style = {
        color: "#ECECEB",
        fontSize: "6rem",
    }

    const linkStyle = {
        color: "#ECECEB",
        textDecoration: "none",
        display: "flex",
    }

    const iconStyle = {
        marginLeft: "2rem",
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