import Header from "./components/Header.jsx";

export default function App() {
    const isToday = true;
    const isStats = false;
    
    return (
        <div className="w-full">

            {/* Header */}
            <Header isToday={isToday} isStats={isStats} />

        </div>
    );
}