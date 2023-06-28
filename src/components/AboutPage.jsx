import { getDocs, query, collection, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function LearnPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [taData, setTaData] = useState();

    useEffect(() => {

        // fetch all tas
        const getTAs = async () => {

            const taSnapshot = await getDocs(query(collection(db, "users"), where("ta", "==", true)))
            setTaData(taSnapshot);
            setIsLoading(false);

        }

        getTAs();

    },[])

    return(
        <>
            {!isLoading && <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem]">

                <div className="w-full mt-[2.4rem] font-bold text-[3.6rem]">TEAM</div>

                <div className="w-full mt-[2rem] gap-[2rem] grid grid-cols-1 place-items-center p-[1.6rem] rounded-[0.8rem] bg-neutral-800 md:grid-cols-2 xl:grid-cols-3">

                    {taData.docs.map((doc, index) => <TaCard key={index} profile={doc.data()["profile"]} name={doc.data()["name"]}  special={doc.data()["special"]} desc={doc.data()["desc"]} socials={doc.data()["socials"]} />)}

                </div>

                <div className="w-full mt-[4rem] font-bold text-[3.6rem]">MISSION</div>

                <div className="w-full mt-[2rem] gap-[3.2rem] grid grid-cols-1 place-items-center mb-[12.8rem] md:grid-cols-2">

                    <MissionCard title="0 Stress" desc="lorem ipsum bullshit"/>
                    <MissionCard title="Explore CS" desc=""/>

                </div>


            </div>}
        </>
    );
}

const TaCard = ({profile, name, special}) => {
    return (
        <div className="w-full h-[6.8rem] bg-neutral-700 rounded-[0.8rem] flex justify-between p-[1.6rem] cursor-pointer">

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
        <div className="w-full h-[30rem] bg-neutral-800 rounded-[0.8rem] p-[1.6rem]">

            <div className="font-medium text-h7">{title}</div>
            
            <div className="mt-[0.4rem] text-h9 leading-[1.5]">{desc}</div>
        
        </div>
    )
}