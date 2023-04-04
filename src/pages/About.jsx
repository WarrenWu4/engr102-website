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
        <div className="basic-page">
            <Nav/>
            <div className="basic-title">Meet The TAs</div>
            <div className="about-team">
                {taCards}
            </div>
        </div>
    )
}