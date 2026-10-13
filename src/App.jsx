import logo from "./assets/Streakly.png";

export default function App() {
  return (
    <div className="w-full">

        {/* Header */}
        <div className="w-full bg-white flex justify-center items-center py-4">
            <div className="w-full max-w-280 flex flex-row justify-between items-center border-2 border-red-500 p-1">
                <div className="flex flex-row justify-center items-center gap-1">
                    <img src={ logo } alt="Steakly Logo" className="w-12 h-12" />
                    <p className="text-[#1B1F1A] font-semibold text-[24px]">Streakly</p>
                </div>
                <div className="w-full max-w-50 flex flex-row justify-center items-center gap-3">
                    <div className="w-full max-w-15 flex flex-col justify-center items-center">
                        <p className="text-[#1B1F1A] font-semibold text-[18px]">Today</p>
                        <div className="w-full border border-b border-[#2F6B47]"></div>
                    </div>
                    <div className="w-full max-w-15 group flex flex-col justify-center items-center">
                        <p className="group-hover:text-[#1B1F1A] text-[#5A6058] font-semibold text-[18px]">Stats</p>
                        <div className="border-transparent group-hover:border-[#2F6B47] w-full border border-b "></div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 pr-2">
                    <p className="text-[#5A6058] font-semibold text-[18px]">Mason</p>
                    <div className="w-10 h-10 rounded-full bg-[#E3E7DE] flex justify-center items-center">
                        <p className="text-[#5A6058] font-semibold text-[16px]">M</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}