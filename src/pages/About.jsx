import "../styles/about.css"
import Nav from "../components/Nav"
import TaoCard from "../components/TaoCard"
import data from "../tas.json"

export default function About() {

    const taCards = data.tas.map((taInfo) => <TaoCard 
        name={taInfo.name}
        pic={taInfo.profilePic}
        info={taInfo.info}
        socials={taInfo.socials}
    />);


    return (
        <div className="about-page">
            <Nav/>
            <div className="about-title">The TAO Team</div>
            <div className="about-team">
                {taCards}
            </div>
        </div>
    )
}