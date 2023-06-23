import { FaChessKing } from "react-icons/fa";
import { GiClown, GiGoat } from "react-icons/gi";
import { BsFillHandThumbsUpFill } from "react-icons/bs"


const TaCard = ({profile, name, special}) => {
    return (
        <button type="button" className="rounded-[0.4rem] bg-neutral-700 px-[1.6rem] py-[1.4rem] flex items-center max-w-[36rem] hover:scale-[102%] transition-all duration-[0.4s] shadow-review-card">

            <img className="w-[3.6rem] h-[3.6rem] rounded-[0.4rem]" src={profile} alt="ta_profile" />

            <div className="font-bold text-h8 text-neutral-100 ml-[0.8rem]">{name}</div>
        
            <div className="ml-[0.8rem] text-neutral-100 text-h9">
                {special}
            </div>

        </button>
    )
}

export default function AboutPage() {
    return (
        <>
            <div className="max-w-[1440px] w-full px-[1.6rem] md:px-[3.2rem] xl:px-[6.4rem] flex flex-col items-center pb-[10.8rem]">

                <div className="font-bold text-h1 text-neutral-100 flex justify-center text-center">Meet the TAs</div>
                <div className="w-[10rem] h-[0.4rem] bg-neutral-100 my-[3.2rem] opacity-20"/>

                <div className="p-[3.2rem] bg-neutral-800 rounded-[0.8rem] mb-[12rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[3.2rem]">

                    <TaCard profile="./reveille.png" name="Warren Wu" special={<FaChessKing/>}/>
                    <TaCard profile="./ta_profile/lily_tang.png" name="Lily Tang" special={<GiClown/>}/>
                    <TaCard profile="./ta_profile/first_last.png" name="Ryan Kabir" special={<GiGoat/>}/>
                    <TaCard profile="./ta_profile/default.jpg" name="Casey Pei" special={<BsFillHandThumbsUpFill/>}/>
                    <TaCard profile="./ta_profile/sam_bush.png" name="Samuel Bush" special={<BsFillHandThumbsUpFill/>}/>
                    <TaCard profile="./ta_profile/avery_haynes.png" name="Avery Haynes" special={<BsFillHandThumbsUpFill/>}/>
                    <TaCard profile="./ta_profile/default.jpg" name="Panda Bruv" special={<BsFillHandThumbsUpFill/>}/>

                </div>


                <div className="font-bold text-h1 text-neutral-100 flex justify-center">Our Mission</div>
                <div className="w-[10rem] h-[0.4rem] bg-neutral-100 my-[3.2rem] opacity-20"/>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[3.2rem] p-[3.2rem] bg-neutral-800 rounded-[0.8rem]">

                    <div className="w-[36rem] h-[20rem] rounded-[0.8rem] bg-neutral-700 shadow-review-card"></div>
                    <div className="w-[36rem] h-[20rem] rounded-[0.8rem] bg-neutral-700 shadow-review-card"></div>
                    <div className="w-[36rem] h-[20rem] rounded-[0.8rem] bg-neutral-700 shadow-review-card"></div>

                </div>

            </div>
        </>
    )
}