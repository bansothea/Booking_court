"use client"

import { useState } from "react";
import { Search, Lock, LogIn } from "lucide-react";
import LisitngCard from "../homePage/components/listingCard"
const homepage = () => {

    const sports = [
      { name: "Football", icon: "/icons/football.png" },
      { name: "Volleyball", icon: "/icons/volleyball.png" },
      { name: "Badminton", icon: "/icons/badminton.png" },
      { name: "Gym", icon: "/icons/dumbbell.png" },
      { name: "Basketball", icon: "/icons/ball-of-basketball.png" },
    ];
    const [selectedSport, setSelectedSport] = useState(sports[0].name);
  return (
    <div>
        <div className=' border border-gray-200 rounded-full p-3 shadow-2xl mt-4 m-4' >
            <div className='flex justify-center items-center gap-2'>
                <Search size={20}/>
                <input 
                    type="text"
                    placeholder='Start your search'
                    className='placeholder-black'
                    />
            </div>
        </div>
        <div className="border-b border-b-gray-200 shadow-xs">
            <div className="flex items-center gap-7 text-xs m-5 mt-5">
                {sports.map((sport) => (
                <button
                    key={sport.name}
                    className={`grid grid-cols-1 gap-1 items-center place-items-center transition-opacity duration-200 ${
                    selectedSport === sport.name ? "opacity-100" : "opacity-50 hover:opacity-80"
                    }`}
                    onClick={() => setSelectedSport(sport.name)}
                >
                    <img src={sport.icon} alt={sport.name} className="w-8" />
                    <p>{sport.name}</p>
                </button>
                ))}
            </div>
        </div>

        <div className="flex justify-center mt-2">
            <LisitngCard/>
        </div>
    </div>
  )
}

export default homepage