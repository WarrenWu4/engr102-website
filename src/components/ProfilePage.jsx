import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

export default function ProfilePage() {

    const nav = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [taInfo, setTaInfo] = useState();

    useEffect(() => {

        const getUser = async() => {
            if (localStorage.getItem("uid") !== null) {
                const uid = localStorage.getItem("uid");
                const docInfo = await getDoc(doc(db, "users", uid))
                if (docInfo.exists()) {
                    setTaInfo(docInfo);
                    setIsLoading(false);
                }
                else {
                    nav("/error");
                }
            }
            else {
                nav("/error");
            }
        }

        getUser();

    })

    const addReview = () => {
        nav("/wip")
    }

    return (
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem]">

            <div className="w-full mt-[2.4rem] flex items-center font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem]">

                {!isLoading && <img src={taInfo.data()["profile"]} alt="ta profile" className="w-[4rem] h-[4rem] rounded-[0.4rem] mr-[1.2rem]"/>}
                Profile

            </div>

            <button type="button" onClick={addReview} className="max-w-[64rem] w-full h-[4.8rem] rounded-[0.8rem] bg-blue-700 font-medium text-h9 flex items-center justify-center mt-[2rem]">
                <BiPlus className="text-h8"/>
                Upload Review
            </button>

            

        </div>
    )
}