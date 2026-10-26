import logo from "../assets/Streakly.png";
import { Link } from "react-router";

export default function Header({ isToday, isStats }) {
    return (
        // Header
        <div className="sticky top-0 z-50 w-full bg-[#FFFFFF] flex justify-center items-center py-3 border-b border-[#DDE0D8]">
            <div className="w-full max-w-280 flex flex-row justify-between items-center p-1">
                <div className="flex flex-row justify-center items-center gap-1">
                    <img src={ logo } alt="Streakly Logo" className="w-12 h-12" />
                    <p className="text-[#1B1F1A] font-semibold text-[24px]">Streakly</p>
                </div>
                <div className="w-full max-w-50 flex flex-row justify-center items-center gap-3">
                    <div className="w-full max-w-15 group flex flex-col justify-center items-center">
                        {isToday ? (
                            <>
                                <p className="text-[#1B1F1A] font-semibold text-[18px]">Today</p>
                                <div className="w-full border border-b border-[#2F6B47]"></div>
                            </>
                        ) : (
                            <>
                                <Link to="/">
                                    <p className="group-hover:text-[#1B1F1A] text-[#5A6058] font-semibold text-[18px]">Today</p>
                                </Link>
                                <div className="border-transparent group-hover:border-[#2F6B47] w-full border border-b "></div>
                            </>
                        )}
                    </div>
                    <div className="w-full max-w-15 group flex flex-col justify-center items-center">
                        {isStats ? (
                            <>
                                <p className="text-[#1B1F1A] font-semibold text-[18px]">Stats</p>
                                <div className="w-full border border-b border-[#2F6B47]"></div>
                            </>
                        ) : (
                            <>
                                <Link to="/stats">
                                    <p className="group-hover:text-[#1B1F1A] text-[#5A6058] font-semibold text-[18px]">Stats</p>
                                </Link>
                                <div className="border-transparent group-hover:border-[#2F6B47] w-full border border-b "></div>
                            </>
                        )}
                    </div>
                    <Link to="/join">
                        <p className="group-hover:text-[#1B1F1A] text-[#5A6058] font-semibold text-[18px]">Join</p>
                    </Link>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 pr-2">
                    <p className="text-[#5A6058] font-semibold text-[18px]">Mason</p>
                    <div className="w-10 h-10 rounded-full bg-[#E3E7DE] flex justify-center items-center">
                        <p className="text-[#5A6058] font-semibold text-[16px]">M</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
