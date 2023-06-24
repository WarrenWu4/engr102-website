import { FaDiscord, FaYoutube, FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/gear.png";

export default function Footer() {

    const socials = [
        {
            "link": "https://tx.ag/216server",
            "icon": <FaDiscord/>
        },
        {
            "link": "https://github.com/WarrenWu4/help102",
            "icon": <FaGithub/>
        },
        {
            "link": "https://www.youtube.com/channel/UCiJosbDdPhrP3Rn3hfSBInw",
            "icon": <FaYoutube/>
        },
        {
            "link": "https://www.linkedin.com/in/warren-wu4/",
            "icon": <FaLinkedin/>
        }
    ].map((social, index) => 
        <a
        href={social["link"]}
        target="_blank"
        key={index}
        className="w-[2.4rem] h-[2.4rem] bg-primary-600 rounded-[0.4rem] text-[1.6rem] flex items-center justify-center"
        >
            {social["icon"]}
        </a>
    )

    return (
        <div className="w-full bg-neutral-800 mt-[6.4rem]">

            <div className="flex w-full px-[1.6rem] justify-between mt-[2.4rem]">
                <NavLink to="/" className="flex items-center font-bold text-[1.6rem]">

                    <img src={logo} alt="logo" className="w-[2.4rem] h-[2.4rem] mr-[0.8rem]" />
                    help102

                </NavLink>

                <div className="flex [&>*]:ml-[0.8rem]">

                    {socials}

                </div>
            </div>

            <div className="w-full flex justify-center [&>*]:mx-[1.6rem] mt-[2rem]">

                <div className="flex flex-col">
                    <div className="font-bold text-[1.2rem]">NAV</div>
                    <div className="[&>*]:mt-[0.8rem] [&>*]:font-light [&>*]:text-[1rem] flex flex-col">
                        <NavLink to="/learn">Learn Topics</NavLink>
                        <NavLink to="/review">Review Content</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/merch">Merchandise</NavLink>
                    </div>
                </div>

                <div className="flex flex-col">
                <div className="font-bold text-[1.2rem]">ORG</div>
                    <div className="[&>*]:mt-[0.8rem] [&>*]:font-light [&>*]:text-[1rem] flex flex-col">
                        <NavLink to="/tou">Terms of Use</NavLink>
                        <NavLink to="/pp">Privacy Policy</NavLink>
                        <NavLink to="/as">Accessibility Statement</NavLink>
                        <a href="https://student-rules.tamu.edu/aggiecode/" target="_blank">Honor Code</a>
                    </div>
                </div>

            </div>
        
            <div className="w-full flex justify-center items-center font-light text-[1.2rem] mt-[2.4rem] mb-[2rem]">
                <FaRegCopyright className="mr-[0.4rem]"/> Copyright 2023 Warren Wu
            </div>
        
        </div>
    )
}