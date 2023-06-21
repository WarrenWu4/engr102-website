export default function LearnPage() {


    return(
        <div className="max-w-[1440px] w-full px-[1.6rem] md:px-[3.2rem] xl:px-[6.4rem] flex justify-between pb-[10.8rem]">

            <LearnSidebar/>
        
            <LearnContent/>

        </div>
    );
}

const LearnSidebar = () => {
    return (
        <div className='bg-neutral-800 rounded-[0.8rem] w-[18%] h-screen'>

        </div>
    )
}

const LearnContent = () => {
    return (
        <div className='bg-neutral-800 rounded-[0.8rem] w-[80%] h-[72rem]'
        
        ></div>
    )
}