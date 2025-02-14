import { HERO_CONTENT } from "../constants"
import  profilePic  from "../assets/ijaz.jpg";

const Hero = () => {
  return (
    
    <div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35 mt-40" >
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">IJAZ MOHSIN</h1>
                     <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl track-tight text-transparent">SENIOR MANAGER SUPPLY CHAIN & OPERATIONS </span>
                     <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
               </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="w-90 h-90 rounded-full object-cover shadow-lg" src={profilePic} alt="Ali Raza" />
                </div>
            </div>
          </div>
    </div>
  )
}

export default Hero
