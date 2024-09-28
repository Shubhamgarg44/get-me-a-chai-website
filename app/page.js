import Image from "next/image";

export default function Home() {
  return (
    <>
   <div className="flex justify-center h-[44vh]  items-center gap-3 flex-col">
        <div className="text-white font-bold text-5xl justify-center items-center flex gap-2 ">Buy me a chai <span><img src="/tea.gif" alt="" width={88}/></span></div>
        <p className="text-gray-300 ">
          A crowd funding platform for creater. Get funded by your fan and followers. Start Now!
        </p>
        <div>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now </button>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
   </div>
        <div className="bg-white h-1 opacity-10 ">

        </div>

        <div className="text-slate-200 container mx-auto py-32">
          <h1 className="text-2xl font-bold text-center p-4 mb-14 ">Your Fans Can Buy You A Chai</h1>
      <div className="flex gap-4 justify-around ">
        <div className="item rounded-full space-y-3 flex flex-col justify-center items-center  ">
          <img className="rounded-full " src="/man.gif" alt="" width={88} />
          <p className="text-slate-400 font-bold text-center">Fund yourself</p>
          <p>Your fans are available to help you</p>
        </div>
        <div className="item rounded-full space-y-3 flex flex-col justify-center items-center ">
          <img className="rounded-full " src="/coin.gif" alt="" width={88} />
          <p className="text-slate-400 font-bold text-center">Fund yourself</p>
          <p>Your fans are available to help you</p>
        </div>
        <div className="item rounded-full space-y-3 flex flex-col justify-center items-center ">
          <img className="rounded-full " src="/group.gif" alt="" width={88} />
          <p className="text-slate-400 font-bold ">Fans Want To Help</p>
          <p>Your fans are available to help you</p>
        </div>
      </div>
        </div>

        <div className="bg-white h-1 opacity-10 ">

        </div>

        <div className="text-slate-200 container mx-auto  py-32 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center p-4 mb-14 ">Learn More About Us</h1>
          <iframe width="1000" height="550" src="https://www.youtube.com/embed/BadB1z-V_qU?si=VhZAu1kVnFY590se" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        
   </>
  );
}
