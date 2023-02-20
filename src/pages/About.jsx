import "../styles/about.css"
import Nav from "../components/Nav"
import TaoCard from "../components/TaoCard"

export default function About() {

    // const taNames = ["Lily Tang", "Sam Bush", "Avery Last_Name", "Ryan Kabir", "I don't", "Really Know", 
    // "Any Other", "TAs and", "PTS so", "RIP ig"
    // ];
    
    const taNames = ["Lily Tang", "Sam Bush", "Avery Last_Name", "Ryan Kabir"
    ];

    const taCards = taNames.map((taName) => <TaoCard name={taName}></TaoCard>)

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