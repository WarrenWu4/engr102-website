import "../styles/donate.css"
import Nav from "../components/Nav";
import {Routes, Route, NavLink} from 'react-router-dom';

export default function Donate() {

    return (
        // can wrap in form once backend stuff is figured out but leave as is for now
        <div className="basic-page">
            <Nav/>

            <div className="donate-title">Feeling Generous?</div>

            <div className="donate-body">
                <div className="donate-container">
                    <div className="donate-amount">$ <input name="amount" placeholder="5"/></div>
                    <div className="underline"></div>
                    <div className='donate-btn btn-font'>
                        {/* links to WIP for now b/c i need to figure out backend shit */}
                        <NavLink className={'center'} to="/donate/payment">
                            Donate
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}