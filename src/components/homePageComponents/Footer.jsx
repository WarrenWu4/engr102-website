import "./Footer.css";

export default function Footer(props) {
    return (
        <div className='footer'>
        <div className='footer-title'>ENGR 102</div>
        <div className='footer-links'>
            <a className='privacy-policy' href="https://www.google.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <div className='vertical-divider'></div>
            <a className='honor-code' href="https://student-rules.tamu.edu/aggiecode/" target="_blank" rel="noopener noreferrer">Honor Code</a>
        </div>
        <div className='footer-socials'>
            {props.social1}
            {props.social2}
            {props.social3}
        </div>
    </div>
    )
}