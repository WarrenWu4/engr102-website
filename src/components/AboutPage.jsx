import { NavLink } from "react-router-dom";

export default function LearnPage() {

    return(
        <div className="w-full px-[1.6rem] flex flex-col items-center">

            <div className="w-full mt-[2.4rem] font-bold text-[3.6rem]">TEAM</div>

            <div className="w-full mt-[2rem] gap-[2rem] grid grid-cols-1 place-items-center p-[1.6rem] rounded-[0.8rem] bg-neutral-800">

                <TaCard profile="/ta_profile/default.jpg" name="Warren Wu" special="👑" desc="" socials=""/>
                <TaCard profile="/ta_profile/default.jpg" name="Lily Tang" special="🤡" desc="" socials=""/>
                <TaCard profile="/ta_profile/default.jpg" name="Ryan Kabir" special="🐐" desc="" socials=""/>
                <TaCard profile="/ta_profile/default.jpg" name="Casey Pei" special="👍" desc="" socials=""/>

            </div>

            <div className="w-full mt-[4rem] font-bold text-[3.6rem]">MISSION</div>

            <div className="w-full mt-[2rem] gap-[3.2rem] grid grid-cols-1 place-items-center">

                <MissionCard title="0 Stress" desc="lorem ipsum bullshit"/>
                <MissionCard title="Explore CS" desc=""/>

            </div>


        </div>
    );
}

const TaCard = ({profile, name, special, desc, socials}) => {
    return (
        <div className="w-full h-[6.8rem] bg-neutral-700 rounded-[0.8rem] flex justify-between p-[1.6rem]">

            <div className="flex font-medium text-h7 leading-[1.5]">
                <img src={profile} alt="ta profile" className="w-[3.6rem] h-[3.6rem] rounded-[0.4rem] mr-[0.8rem]"/>
                {name}
            </div>

            <div className="text-h7 leading-[1.5]">{special}</div>

        </div>
    )
}

const MissionCard = ({title, desc}) => {
    return (
        <div className="w-[28.8rem] h-[30rem] bg-neutral-800 rounded-[0.8rem] p-[1.6rem]">

            <div className="font-medium text-h7">{title}</div>
            
            <div className="mt-[0.4rem] text-h9 leading-[1.5]">{desc}</div>
        
        </div>
    )
}