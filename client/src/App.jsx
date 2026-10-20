import Header from "./components/Header.jsx";
import sprout from "./assets/sprout.svg";

export default function App() {
    const date = new Date();
    const dateFormatted = date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    return (
        <div className="w-full">
            {/* Header */}
            <Header isToday={true} isStats={false} />

            {/* Main */}
            <div className="w-full max-w-350 flex flex-row justify-center items-stretch border-2 border-red-500 mx-auto">
                <div className="w-full max-w-250 flex flex-col border-2 border-black p-2">
                    <div className="w-full flex flex-row justify-between items-center px-3 pb-3">
                        <div className="flex flex-col justify-center items-start">
                            <p className="text-[#5A6058] text-[16px]">{ dateFormatted }</p>
                            <p className="font-semibold text-[#1B1F1A] text-[34px]">Todays Tasks</p>
                        </div>
                        <button className="w-30 bg-[#2F6B47] rounded-[5px] text-[#FFFFFF] text-[16px] font-semibold p-3 hover:bg-[#1F4A31]">New habit</button>
                    </div>
                    <div className="w-full border-b-2 border-[#DDE0D8] mb-5"></div>
                    {/* Tasks out of 4 before new page */}
                    <div className="w-full flex-1 flex flex-col gap-3 mt-3">

                        <div className="w-full flex-1 flex flex-row justify-between items-center border border-[#DDE0D8] rounded-[10px] bg-[#FFFFFF] p-7">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <p>ICON</p>
                                <div className="flex flex-col justify-center items-start">
                                    <p className="font-semibold text-[#1B1F1A] text-[20px]">Read 20 minutes</p>
                                    <p className="text-[#5A6058] text-[14px] -mt-px">Every day</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <p>(ICON) 5 days</p>
                                <p>ICON</p>
                            </div>
                        </div>

                        <div className="w-full flex-1 flex flex-row justify-between items-center border border-[#DDE0D8] rounded-[10px] bg-[#FFFFFF] p-7">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <p>ICON</p>
                                <div className="flex flex-col justify-center items-start">
                                    <p className="font-semibold text-[#1B1F1A] text-[20px]">Drink 1/2 gallon of water</p>
                                    <p className="text-[#5A6058] text-[14px] -mt-px">Every day</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <p>(ICON) 12 days</p>
                                <p>ICON</p>
                            </div>
                        </div>

                        <div className="w-full flex-1 flex flex-row justify-between items-center border border-[#DDE0D8] rounded-[10px] bg-[#FFFFFF] p-7">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <p>ICON</p>
                                <div className="flex flex-col justify-center items-start">
                                    <p className="font-semibold text-[#1B1F1A] text-[20px]">Go for a 20 minute walk</p>
                                    <p className="text-[#5A6058] text-[14px] -mt-px">Every day</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <p>(ICON) 3 days</p>
                                <p>ICON</p>
                            </div>
                        </div>

                        <div className="w-full flex-1 flex flex-row justify-between items-center border border-[#DDE0D8] rounded-[10px] bg-[#FFFFFF] p-7">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <p>ICON</p>
                                <div className="flex flex-col justify-center items-start">
                                    <p className="font-semibold text-[#1B1F1A] text-[20px]">Practice spanish</p>
                                    <p className="text-[#5A6058] text-[14px] -mt-px">Once a week</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <p>(ICON) 0 days</p>
                                <p>ICON</p>
                            </div>
                        </div>

                        <div className="text-center mt-3">
                            <p className="font-semibold text-[16px] text-[#2F6B47]">Page 1/2</p>
                        </div>

                    </div>
                </div>
                <div className="w-full max-w-100 flex flex-col border-2 border-black p-2">
                    <div className="border border-[#DDE0D8] rounded-[10px] bg-[#FFFFFF] p-5">
                        <p className="font-semibold text-[#1B1F1A] text-[20px]">This week</p>
                        <div className="w-full flex flex-row justify-center items-center gap-2 mt-3 mb-5">
                            <div className="flex flex-col justify-center items-center">
                                <p>M</p>
                                <div className="w-8 h-8 bg-[#2F6B47] rounded-[10px]"></div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p>T</p>
                                <div className="w-8 h-8 bg-[#C5DCCB] rounded-[10px]"></div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p>W</p>
                                <div className="w-8 h-8 bg-[#2F6B47] rounded-[10px]"></div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p>T</p>
                                <div className="w-8 h-8 bg-[#4E8F64] rounded-[10px]"></div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p>F</p>
                                <div className="w-8 h-8 bg-[#E8EBE4] rounded-[10px]"></div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p>S</p>
                                <div className="w-8 h-8 bg-[#8DBB9A] rounded-[10px]"></div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p>S</p>
                                <div className="w-8 h-8 bg-[#C5DCCB] rounded-[10px]"></div>
                            </div>
                        </div>
                        <p className="text-[14px] text-[#5A6058]">Darker = more habits completed that day</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center border border-[#DDE0D8] rounded-[10px] bg-[#FFFFFF] mt-3 p-5">
                        <div className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#1B1F1A] text-[16px]">2 of 4 done today</p>
                            <p className="text-[#5A6058] text-[16px]">50%</p>
                        </div>
                        <div className="w-full h-3 bg-[#DDE0D8] rounded-[10px] mt-3">
                            <div className="w-1/2 h-3 bg-[#2F6B47] rounded-[10px]"></div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center bg-[#E6F0E9] rounded-[10px] mt-3 p-5">
                        <img src={sprout} alt="Sprout Mascot" className="w-30 h-30 mx-auto" />
                        <div className="w-full flex flex-col justify-center items-center gap-1 mt-5 text-center">
                            <p className="font-semibold text-[15px] text-[#2F6B47]">SPROUT SAYS</p>
                            <p className="font-semibold text-[#1B1F1A] text-[22px]">Halfway there! Two more <br />to go and today's a perfect day.</p>
                            <p className="text-[17px] text-[#2F6B47]">Small steps every day add up.< br />Keep growing!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}