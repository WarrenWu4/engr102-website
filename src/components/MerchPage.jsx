export default function MerchPage() {

    const handleInterest = (e) => {
        e.preventDefault()
        console.log("WIP")
    }

    return (
        <div className="max-w-[1440px] w-full px-[1.6rem] md:px-[3.2rem] xl:px-[6.4rem] flex flex-col items-center pb-[10.8rem]">

            <div className="font-bold text-h1 text-neutral-100 flex justify-center text-center">

                Merchandise Coming Soon!

            </div>

            <div className="w-[10rem] h-[0.4rem] bg-neutral-100 my-[3.2rem] opacity-20"/>

            <form className="flex flex-col rounded-[0.8rem] bg-neutral-800 p-[3.2rem]" onSubmit={handleInterest}>

                <label className='text-h7 text-neutral-200 font-medium'>Enter email to get priority</label>

                <input required type="email" placeholder="john.doe@example.com" className="mt-[2.4rem] h-[4.8rem] rounded-[0.4rem] px-[1.2rem] bg-neutral-700 font-medium text-neutral-100 text-h8"/>

                <button type="submit" className="h-[4.4rem] bg-green-800 rounded-[0.4rem] mt-[2.4rem] font-medium text-neutral-100 text-h8 flex justify-center items-center text-center hover:shadow-btn-highlight transition-all duration-[0.6s]">I'm Interested!</button>

            </form>

        </div>
    )
}