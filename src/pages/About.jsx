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

            <div className="about-container">

                <div className="about-title">Our Mission</div>

                <div className="about-mission">
                    vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet
                </div>

                <div className="home-divider"></div>

                <div className="about-title">Meet The TAs</div>
                
                <div className="about-team">
                    {taCards}
                </div>

            </div>
        </div>
    )
}