import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-[35vh] gap-5 px-5 md:px-0 text-xs md:text-base">
      <div className="font-bold md:text-5xl flex md:gap-2 gap-20 justify-center items-center text-2xl">
        Get me a coffee <span> <img src="/cupcoffee.gif" width={60} alt="" /></span>
      </div>
      <p className="text-center md:text-left">
        A crowdfunding platform for creators To fund their projects.
      </p>
      <p className="text-center md:text-left">
        A place where your fan can buy a coffee. Unleash the power of your fans and get your project funds.
      </p>
      <div>
        <Link href={"/login"}>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Start Here
        </span>
        </button>
        </Link>

        <Link href={"/about"}>
        <button class=" mx-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Read More
        </span>
        </button>
        </Link>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="container mx-auto pb-16 pt-8 px-10">
      <h2 className="font-bold text-2xl my-10 text-center ">Your Fan Can Buy a Coffee</h2>
      <div className="flex gap-5 justify-around">

        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className="bg-slate-800 rounded-full" src="/man.gif" width={88} alt="" />
          <p className="font-bold text-center">Fans Wants to Help</p>
          <p className="text-center">Your fans are available to support you</p>
        </div>
     
        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className="bg-slate-800 rounded-full" src="/coin.gif" width={88} alt="" />
          <p className="font-bold text-center">Fans Wants to Contribute</p>
          <p className="text-center">Your fans are willing to contribute financially</p>
        </div>

        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className="bg-slate-800 rounded-full" src="/group.gif" width={88} alt="" />
          <p className="font-bold text-center">Fans Wants to Collabrate</p>
          <p className="text-center">Your fans are ready to collabrate with you</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="container mx-auto pb-16 pt-8 flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl my-10 text-center">Learn More About Us</h2>
      <iframe className="border-2" src="https://www.youtube.com/embed/QtaorVNAwbI?si=4A86h-HWmQQnJ1ef" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>
  );
}
