import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export default function MerchPage() {

    const [active, setActive] = useState((localStorage.getItem("interest") === "true") ? true:false)

    const incrementInterest = async (e) => {
        e.preventDefault()
        if (!active) {
            setActive(true);
            localStorage.setItem("interest", "true")

            const currCount = await getDoc(doc(db, "merch_interest", "total"))
            await updateDoc(doc(db, "merch_interest", "total"), {
                count: (Number(currCount.data()["count"])+1)
            })
        }
    }

    return (
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem]">

            <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] text-center">

                Merchandise Coming Soon!

            </div>

            {!active && <button type="button" onClick={incrementInterest} className="h-[4.4rem] px-[1.6rem] rounded-[0.4rem] mt-[2.4rem] font-medium text-neutral-100 text-h8 flex justify-center items-center text-center mb-[6.4rem] md:mb-[25.6rem] hover:bg-green-600 bg-green-800 transition-all duration-[0.6s]">I'm Interested!</button>}

            {active && <div className="mt-[2.4rem] mb-[6.4rem] md:mb-[25.6rem] font-medium text-h8">your interest has been noted 😊🙏</div>}

        </div>
    )
}