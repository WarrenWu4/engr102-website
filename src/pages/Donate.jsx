import "../styles/donate.css"
import Nav from "../components/Nav";
import {Routes, Route, NavLink} from 'react-router-dom';

export default function Donate() {

    return (
        // cant wrap in form once backend stuff is figured out but leave as is for now
        <div className="basic-page">
            <Nav/>

            <div className="basic-title" style={{color: "#F9A828"}}>Feeling Generous?</div>

            <div className="donate-body">
                <div className="donate-container">
                    <div className="donate-amount">$ <input name="amount" placeholder="5"/></div>
                    <div className="underline"></div>
                    <div className='donate-btn'>
                        {/* links to WIP for now b/c i need to figure out backend shit */}
                        <NavLink to="/donate/payment">
                            Donate
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}