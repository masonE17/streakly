import Header from "./components/Header.jsx";

export default function App() {    
    return (
        <div className="w-full">
            {/* Header */}
            <Header isToday={true} isStats={false} />

            {/* Main */}
            <div className="w-full max-w-350 flex flex-row justify-center items-start border-2 border-red-500 mx-auto my-8">
                <div className="w-full max-w-225 h-150 border-2 border-black p-2">
                    <div className="w-full flex flex-row justify-between items-center border-2 border-red-500 p-3">
                        <div className="flex flex-col justify-center items-start">
                            <p>DATE</p>
                            <p>TASK TODAY</p>
                        </div>
                        <button>ADD NEW TASK</button>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center border-2 border-red-500 mt-3 p-3">
                        <div className="w-full flex flex-row justify-between items-center">
                            <p># TASKS COMPLETED</p>
                            <p>PERCENTAGE</p>
                        </div>
                        <p>PROGRESS BAR</p>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center border-2 border-red-500 mt-3 p-3">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <p>CHECK/UNCHECK</p>
                            <div className="flex flex-col justify-center items-start">
                                <p>TASK NAME</p>
                                <p>TASK DETAILS</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <p>STREAK</p>
                            <p>EDIT TASKS</p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-125 h-150 border-2 border-black p-2">
                    <div className="border-2 border-red-500 p-3">
                        <p>THIS WEEK</p>
                        <p>HEATMAP (PREV 6 DAYS)</p>
                        <p>DARKER = MORE TASK</p>
                    </div>
                    <div className="border-2 border-red-500 mt-3 p-3">
                        <p>LONGEST STREAK</p>
                        <p># DAYS</p>
                        <p>WHAT STREAK</p>
                    </div>
                    <div className="border-2 border-red-500 mt-3 p-3">
                        <p>SPROUT (MASCOT)</p>
                        <p>ENCOURAGING MESSAGE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}